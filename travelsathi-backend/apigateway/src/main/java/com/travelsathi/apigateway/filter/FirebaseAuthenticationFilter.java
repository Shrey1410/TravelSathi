package com.travelsathi.apigateway.filter;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
@Slf4j
public class FirebaseAuthenticationFilter implements WebFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {

        // Extract the request path.
        String path = exchange.getRequest().getURI().getPath();

        // Skip authentication for public endpoints (e.g., health checks).
        if (path.startsWith("/actuator")) {
            return chain.filter(exchange);
        }

        // Read the Authorization header from the incoming request.
        String header = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);

        // Reject the request if the Authorization header is missing
        // or does not contain a Bearer token.
        if (header == null || !header.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        // Extract the Firebase ID token by removing the "Bearer " prefix.
        String idToken = header.substring(7);
        try {
            // Verify the Firebase ID token.
            FirebaseAuth.getInstance().verifyIdToken(idToken);

            // The pass the request
            return chain.filter(exchange);
        } catch (Exception e) {
            // Token verification failed.
            // Return HTTP 401 Unauthorized.
            log.error("Firebase token validation failed.", e);
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
    }

}
