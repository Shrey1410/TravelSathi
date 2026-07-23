package com.travelsathi.aiservice.models;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "recommendations")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation {
    @Id
    private String id;
    private String tripId;
    private String userId;
    private String summary;
    private String destinationOverview;
    private String weather;
    private List<Itinerary> itinerary;
    private Budget estimatedBudget;

    private List<String> packingSuggestions;

    private List<String> travelTips;

    private EmergencyContacts emergencyContacts;

    @CreatedDate
    private LocalDateTime createdAt;

}
