package com.example.taskmanager.config;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ComponentScan("com.example.taskmanager")
@PropertySource("classpath:db.properties")
public class AppConfig {
}
