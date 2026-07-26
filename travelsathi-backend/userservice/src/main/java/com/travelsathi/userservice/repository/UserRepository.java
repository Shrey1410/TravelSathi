package com.travelsathi.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelsathi.userservice.models.Users;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<Users, String> {

    public boolean existsByProviderId(String providerId);

    public Optional<Users> findByProviderId(String providerId);

    public boolean existsByEmail(String email);   
     
}
