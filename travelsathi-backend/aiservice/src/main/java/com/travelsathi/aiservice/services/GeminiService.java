package com.travelsathi.aiservice.services;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class GeminiService {

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    @Autowired
    public GeminiService(WebClient.Builder webClientBuilder){
        this.webClient = webClientBuilder.build();
    }

    public String getAnswer(String question){
        Map<String, Object> requestBody = Map.of(
            "model" , "gemini-3.6-flash",
            "input" , question
        );

        String response = webClient.post().uri(geminiApiUrl).header("Content-Type", "application/json").header("x-goog-api-key", geminiApiKey).bodyValue(requestBody).retrieve().bodyToMono(String.class).block();

        return response;
    }

}
