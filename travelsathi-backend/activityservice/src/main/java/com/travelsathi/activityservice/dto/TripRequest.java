package com.travelsathi.activityservice.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class TripRequest {
    private String userId;
    private String source;
    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long budget;
}
