package com.travelsathi.userservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterUserRequest {
    @NotBlank(message ="Email is required")
    @Email(message="Invalid Email format")
    private String email;

    @NotBlank(message ="Email is required")
    @Size(min = 8, message="Password must be of atleast 8 char")
    private String password;

    private String firstName;
    private String lastName;
}
