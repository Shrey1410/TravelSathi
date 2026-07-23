package com.travelsathi.aiservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Activity {

    private String time;
    private String activity;
    private String location;
    private String duration;
    private int estimatedCost;
    private String notes;
}
