package com.travelsathi.aiservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.travelsathi.aiservice.models.Recommendation;
import com.travelsathi.aiservice.repository.RecommendationRepository;
import com.travelsathi.aiservice.models.Trip;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ActivityAIService {

    @Autowired
    private GeminiService geminiService;

    public Recommendation generateRecommendation(Trip trip){
        String prompt = createPromptForActivity(trip);
        String aiResponse = geminiService.getAnswer(prompt);
        Recommendation recommendation = processAiResponse(aiResponse);
        return recommendation;
    }

    private Recommendation processAiResponse(String aiResponse){
        try{
            ObjectMapper mapper = new ObjectMapper(); 
            JsonNode rootNode = mapper.readTree(aiResponse);
            JsonNode textNode = rootNode.path("steps")
                                        .get(1)
                                        .path("content")
                                        .get(0)
                                        .path("text");
            String jsonContent = textNode.asText().replaceAll("```json\\n", "").replaceAll("\\n```", "").trim();
            // log.info("Parsed Response from AI : {}", jsonContent);
            Recommendation recommendation = mapper.readValue(jsonContent, Recommendation.class);
            log.info("Recommendation saved with id: {}", recommendation.getId());
            return recommendation;
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    private String createPromptForActivity(Trip trip){
        return String.format(
            """
                Analyze this trip details and provide detailed Plan in the following EXACT JSON format:
                {
                    "summary": "A short summary of the trip",
                    "destinationOverview": "Brief introduction to the destination",
                    "weather": "Expected weather during the trip",
                    "itinerary": [
                        {
                        "day": 1,
                        "title": "Arrival and Local Sightseeing",
                        "activities": [
                            {
                            "time": "09:00",
                            "activity": "Visit City Center",
                            "location": "Location Name",
                            "duration": "2 hours",
                            "estimatedCost": 500,
                            "notes": "Any important information"
                            }
                        ]
                        }
                    ],
                    "estimatedBudget": {
                        "transport": 0,
                        "hotel": 0,
                        "food": 0,
                        "activities": 0,
                        "miscellaneous": 0,
                        "total": 0
                    },
                    "packingSuggestions": [
                        "Item 1",
                        "Item 2"
                    ],
                    "travelTips": [
                        "Tip 1",
                        "Tip 2"
                    ],
                    "emergencyContacts": {
                        "police": "",
                        "hospital": "",
                        "touristHelpline": ""
                    }
                }
                
                Analyze the Trip details:
                Trip Details:
                - Source: %s
                - Destination: %s
                - Start Date: %s
                - End Date: %s
                - Budget: %s

                On the basis of the Trip details generate the Travel Plan in the EXACT JSON format: 
                """, trip.getSource(), trip.getDestination(), trip.getStartDate(), trip.getEndDate(), trip.getBudget());
    }

}
