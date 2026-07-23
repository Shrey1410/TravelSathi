package com.travelsathi.aiservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelsathi.aiservice.models.Recommendation;
import com.travelsathi.aiservice.repository.RecommendationRepository;

@Service
public class RecommendationService {

    @Autowired
    private RecommendationRepository recommendationRepository;


    public List<Recommendation> getUserRecommendation(String userId){
        return recommendationRepository.findByUserId(userId);
    }

    public Recommendation getActivityRecommendation(String tripId){
        return recommendationRepository.findByTripId(tripId).orElseThrow(() -> new RuntimeException("No Recommendation found for this activity."));
    }
    
}
