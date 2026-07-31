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

    /**
     * This will Listen for the events published in RabbitMQ messaging Queue
     * and generates the corresponding Recommendation
     * @param trip
     */
    @RabbitListener(queues = "activity.queue")
    public void processActivity(Trip trip) {
        log.info("Received trip for processing: {}", trip);
        try{
            //1. Generates the Recommendation
            Recommendation recommendation = aiService.generateRecommendation(trip);

            //2. Set the userId and TripId for the generated Recommendation
            recommendation.setUserId(trip.getUserId());
            recommendation.setTripId(trip.getId());

            //3. Save the Generated Recommendation to the Database.
            recommendationRepository.save(recommendation);
        }
        catch(Exception e){
            log.error("Exception occured during recommendation generation.", e);
        }
        finally{
            log.info("Generated Recommendation");
        }
    }
    
}
