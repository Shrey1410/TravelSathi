package com.travelsathi.activityservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.travelsathi.activityservice.dto.TripRequest;
import com.travelsathi.activityservice.dto.TripResponse;
import com.travelsathi.activityservice.service.TripService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/trips")
public class TripController {

    @Autowired
    private TripService tripService;
    
    /**
     * This Endpoint is used to create the Trip
     * @param request
     * @return
     */
    @PostMapping
    public ResponseEntity<TripResponse> createTrip(@RequestBody TripRequest request){
        return ResponseEntity.ok(tripService.createTrip(request));
    }

    /**
     * This endpoint is used for fetching the List of all the trips by given providerId
     * @param providerId
     * @return
     */
    // TO-DO: Implement the pagination for this Endpoint
    @GetMapping
    public ResponseEntity<List<TripResponse>> getUserTrips(@RequestParam String providerId){
        return ResponseEntity.ok(tripService.getUserTrips(providerId));
    }

    /**
     * This endpoint is used for fetching a particular Trip corresponding to given tripId
     * @param tripId
     * @return
     */
    // Currently frontend does not uses this Endpoint.
    @GetMapping("/{tripId}")
    public ResponseEntity<TripResponse> getTrip(@PathVariable String tripId){
        return ResponseEntity.ok(tripService.getTrip(tripId));
    } 

}
