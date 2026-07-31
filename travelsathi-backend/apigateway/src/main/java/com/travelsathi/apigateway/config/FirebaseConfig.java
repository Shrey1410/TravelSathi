package com.travelsathi.apigateway.config;

import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import jakarta.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;

@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void initialization() {
        try {
            InputStream serviceAccount = new ClassPathResource("firebase-service-account.json").getInputStream();

            // Create the HTTP transport used by Firebase.
            HttpTransport transport = new NetHttpTransport.Builder().build();

            // Configure Firebase using the service account credentials.
            FirebaseOptions options = FirebaseOptions.builder().setCredentials(GoogleCredentials.fromStream(serviceAccount)).setHttpTransport(transport).build();

            // initializing Firebase.
            FirebaseApp.initializeApp(options);

        } catch (Exception error) {
            throw new IllegalStateException("Failed to initialize FirebaseApp", error);
        }
    }
}