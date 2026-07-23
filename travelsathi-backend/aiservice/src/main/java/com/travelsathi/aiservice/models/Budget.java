package com.travelsathi.aiservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Budget {

    private int transport;
    private int hotel;
    private int food;
    private int activities;
    private int miscellaneous;
    private int total;
}