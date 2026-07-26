package com.travelsathi.apigateway.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.travelsathi.apigateway.user.UserResponse;

import reactor.core.publisher.Mono;

@Service
public class UserService {

    @Autowired
    private WebClient userServiceWebClient;

    public Mono<Boolean> validateUser(String userId){
        return userServiceWebClient.get().uri("/api/v1/users/{userId}/validate", userId).retrieve().bodyToMono(Boolean.class).onErrorResume(WebClientResponseException.class, e->{
            if(e.getStatusCode() == HttpStatus.NOT_FOUND){
                return Mono.error(new RuntimeException("User not found: "+ userId));
            }
            else if(e.getStatusCode() == HttpStatus.BAD_REQUEST){
                return Mono.error(new RuntimeException("Unexpected error: "+ e.getMessage()));
            }
            return Mono.error(new RuntimeException("Unexpected error: "+e.getMessage()));
        });
    }

    public Mono<UserResponse> registerUser(RegisterRequest request){
        return userServiceWebClient.post().uri("/api/v1/users/").bodyValue(request).retrieve().bodyToMono(UserResponse.class).onErrorResume(WebClientResponseException.class, e->{
            if(e.getStatusCode() == HttpStatus.BAD_REQUEST){
                return Mono.error(new RuntimeException("Bad request User not found: " + request.getEmail()));
            }
            else if(e.getStatusCode() == HttpStatus.INTERNAL_SERVER_ERROR){
                return Mono.error(new RuntimeException("Internal Server Error Unexpected error: " + e.getMessage()));
            }
            return Mono.error(new RuntimeException("Unexpected error: " + e.getMessage()));
        });
    }

}
