package com.travelsathi.userservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterUserRequest {
    @NotBlank(message ="Email is required")
    @Email(message="Invalid Email format")
    private String email;
    private String firstName;
    private String lastName;
    private String providerId;
}