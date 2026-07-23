package com.travelsathi.aiservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmergencyContacts {

    private String police;
    private String hospital;
    private String touristHelpline;
    
}