package com.travelsathi.aiservice.models;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class Trip {
    private String id;
    private String userId;
    private String source;
    private String destination;
    private LocalDate startDate;
    private Long budget;
    private LocalDate endDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
