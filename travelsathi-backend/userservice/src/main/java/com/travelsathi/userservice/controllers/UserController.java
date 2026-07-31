package com.travelsathi.userservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelsathi.userservice.dto.RegisterUserRequest;
import com.travelsathi.userservice.dto.UserResponse;
import com.travelsathi.userservice.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    /**
     * This Endpoint will fetch the user Profile for given providerId
     * @param userId
     * @return
     */
    @GetMapping("/{providerId}")
    public ResponseEntity<UserResponse> getUserProfie(@PathVariable String providerId){
        return ResponseEntity.ok(userService.getUserProfile(providerId));
    }

    /**
     * Should have single endpoint for creating and updating the user
     * @param request
     * @return
     */
    @PostMapping
    public ResponseEntity<UserResponse> createOrUpdateUser(@Valid @RequestBody RegisterUserRequest request){
        return ResponseEntity.ok(userService.createOrUpdateUserProfile(request));
    }

    /**
     * This checks that whether the user exists with given providerId or not user by other microservices
     * @param providerId 
     * @return
     */
    @GetMapping("/{providerId}/validate")
    public ResponseEntity<Boolean> validateUserId(@PathVariable String providerId){
        return ResponseEntity.ok(userService.existsByProviderId(providerId));
    }

}
