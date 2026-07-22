package com.travelsathi.activityservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.travelsathi.activityservice.models.Trip;

@Repository
public interface TripRepository extends MongoRepository<Trip, String>{

    public List<Trip> findByUserId(String userId);

}
