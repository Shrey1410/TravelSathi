package com.travelsathi.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelsathi.userservice.models.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, String> {

    public boolean existsByEmail(String email);   
     
}
