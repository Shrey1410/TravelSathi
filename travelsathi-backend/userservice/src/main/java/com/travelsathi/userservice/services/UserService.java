package com.travelsathi.userservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelsathi.userservice.dto.RegisterUserRequest;
import com.travelsathi.userservice.dto.UserResponse;

import com.travelsathi.userservice.models.Users;
import com.travelsathi.userservice.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Creates or Updates the user data in the database.
     * @param userRequest
     * @return
     */
    public UserResponse createOrUpdateUserProfile(RegisterUserRequest userRequest){
        Users user = new Users();
        user.setEmail(userRequest.getEmail());
        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setProviderId(userRequest.getProviderId());

        Users savedUser = userRepository.save(user);
        UserResponse userResponse = new UserResponse();
        userResponse.setId(savedUser.getId());
        userResponse.setEmail(savedUser.getEmail());
        userResponse.setFirstName(savedUser.getFirstName());
        userResponse.setLastName(savedUser.getLastName());
        userResponse.setCreatedAt(savedUser.getCreatedAt());
        userResponse.setUpdatedAt(savedUser.getUpdatedAt());
        userResponse.setProviderId(savedUser.getProviderId());
        return userResponse;
    }

    /**
     * Fetches user Profile from the database on basis of ProviderId
     * @param providerId
     * @return
     */
    public UserResponse getUserProfile(String providerId){
        Users user = userRepository.findByProviderId(providerId).orElseThrow(()-> new RuntimeException("User Does not Exists"));
        UserResponse userResponse = new UserResponse();
        userResponse.setId(user.getId());
        userResponse.setEmail(user.getEmail());
        userResponse.setFirstName(user.getFirstName());
        userResponse.setLastName(user.getLastName());
        userResponse.setCreatedAt(user.getCreatedAt());
        userResponse.setUpdatedAt(user.getUpdatedAt());
        userResponse.setProviderId(user.getProviderId());
        return userResponse;
    }

    /**
     * Checks user exists or not for given providerId user by other services to verify that providerId is corresponding
     * to a valid user or not.
     * @param providerId
     * @return
     */
    public boolean existsByProviderId(String providerId){
        log.info("Calling user validation API for userId: {}", providerId);
        return userRepository.existsByProviderId(providerId);
    }

}
