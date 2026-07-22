package com.travelsathi.activityservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelsathi.activityservice.dto.TripRequest;
import com.travelsathi.activityservice.dto.TripResponse;
import com.travelsathi.activityservice.models.Trip;
import com.travelsathi.activityservice.repository.TripRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private UserValidationService userValidationService;

    private TripResponse mapToResponse(Trip trip){
        TripResponse response = new TripResponse();
        response.setId(trip.getId());
        response.setUserId(trip.getUserId());
        response.setSource(trip.getSource());
        response.setDestination(trip.getDestination());
        response.setStartDate(trip.getStartDate());
        response.setEndDate(trip.getEndDate());
        response.setBudget(trip.getBudget());
        response.setCreatedAt(trip.getCreatedAt());
        response.setUpdatedAt(trip.getUpdatedAt());
        return response;
    }

    public TripResponse createTrip(TripRequest request) {

        log.info("Calling user validation API for userId: {}", request.getUserId());

        boolean isValidUser = userValidationService.validateUser(request.getUserId());
        if(!isValidUser){
            throw new RuntimeException("Invalid user:" + request.getUserId());
        }

        Trip trip = Trip.builder()
                        .userId(request.getUserId())
                        .source(request.getSource())
                        .destination(request.getDestination())
                        .startDate(request.getStartDate())
                        .endDate(request.getEndDate())
                        .budget(request.getBudget())
                        .build();

        Trip tripSaved = tripRepository.save(trip);
        TripResponse response = mapToResponse(tripSaved);
        return response;
    }

    public List<TripResponse> getUserTrips(String userId){
        List<Trip> result = tripRepository.findByUserId(userId);
        List<TripResponse> response = new ArrayList<>();
        for(Trip trip : result){
            TripResponse tripResponse = mapToResponse(trip);
            response.add(tripResponse);
        }
        return response;
    }

    public TripResponse getTrip(String tripId){
        Trip result = tripRepository.findById(tripId).orElseThrow(()-> new RuntimeException("Trip does not found."));
        return mapToResponse(result);
    }
}
