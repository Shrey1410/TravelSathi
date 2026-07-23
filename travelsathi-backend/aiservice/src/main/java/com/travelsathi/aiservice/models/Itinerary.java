package com.travelsathi.aiservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Itinerary {

    private int day;
    private String title;
    private List<Activity> activities;
}