package com.travelsathi.aiservice.services;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travelsathi.aiservice.models.Trip;
import com.travelsathi.aiservice.models.Recommendation;
import com.travelsathi.aiservice.repository.RecommendationRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ActivityMessageListner {

    @Autowired
    private ActivityAIService aiService;

    @Autowired
    private RecommendationRepository recommendationRepository;

    @RabbitListener(queues = "activity.queue")
    public void processActivity(Trip trip) {
        log.info("Received activity for processing: {}", trip.getId());
        try{
            Recommendation recommendation = aiService.generateRecommendation(trip);
            recommendation.setUserId(trip.getUserId());
            recommendation.setTripId(trip.getId());
            recommendationRepository.save(recommendation);
        }
        catch(Exception e){
            log.error("Exception occured during recommendation generation.", e);
        }
        // log.info("Generated Recommendation: {}", aiService.generateRecommendation(trip));
    }
    
}
