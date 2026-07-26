package com.travelsathi.apigateway;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;

import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.travelsathi.apigateway.user.RegisterRequest;
import com.travelsathi.apigateway.user.UserService;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Component
@Slf4j
public class ProviderUserSyncFilter implements WebFilter {

    @Autowired
    private UserService userService;
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String headerUserId = exchange.getRequest().getHeaders().getFirst("X-User-ID");
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        RegisterRequest registerRequest = getUserDetails(token);

        String userId = headerUserId != null
        ? headerUserId
        : (registerRequest != null ? registerRequest.getProviderId() : null);

        if(userId != null && token != null){
            return userService.validateUser(userId)
                .flatMap(exist -> {
                    if(!exist){
                        // Register User
                        log.info("Registring the user Data.");
                        if(registerRequest != null){
                            return userService.registerUser(registerRequest).then();
                        }
                    }
                    log.info("User already exists, Skipping sync.");
                    return Mono.empty();
                })
                .then(Mono.defer(() -> {
                    ServerHttpRequest mutatedRequest = exchange.getRequest().mutate().header("X-User-ID", userId)
                    .build();
                    return chain.filter(exchange.mutate().request(mutatedRequest).build());
                }));
        }
        return chain.filter(exchange);
    }
    
    private RegisterRequest getUserDetails(String token) {
        try{
            String tokenWithoutBearer = token.replace("Bearer", "").trim();
            SignedJWT signedJWT = SignedJWT.parse(tokenWithoutBearer);
            JWTClaimsSet claims = signedJWT.getJWTClaimsSet();
            RegisterRequest registerRequest = new RegisterRequest();
            registerRequest.setEmail(claims.getStringClaim("email"));
            registerRequest.setProviderId(claims.getStringClaim("sub"));
            registerRequest.setPassword("dummy@123123");
            registerRequest.setFirstName(claims.getStringClaim("given_name"));
            registerRequest.setLastName(claims.getStringClaim("family_name"));
            return registerRequest;
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
