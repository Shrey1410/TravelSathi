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
    
    @GetMapping("/{userId}")
    public ResponseEntity<UserResponse> getUserProfie(@PathVariable String userId){
        return ResponseEntity.ok(userService.getUserProfile(userId));
    }

    @PostMapping("/")
    public ResponseEntity<UserResponse> createUser(@Valid @RequestBody RegisterUserRequest request){
        return ResponseEntity.ok(userService.createUserProfile(request));
    }

    @GetMapping("/{userId}/validate")
    public ResponseEntity<Boolean> validateUserId(@PathVariable String userId){
        return ResponseEntity.ok(userService.existsByUserId(userId));
    }

}
