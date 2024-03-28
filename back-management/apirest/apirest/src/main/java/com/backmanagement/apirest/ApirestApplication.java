package com.backmanagement.apirest;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.backmanagement.apirest.Entity.Contact;
import com.backmanagement.apirest.Repository.ContactRepository;

@SpringBootApplication
public class ApirestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApirestApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ContactRepository contactRepository) {
		return (String... args) -> {
			List<Contact> contacts = Arrays.asList(
				new Contact("Carlos", "carlos@gmail.com", LocalDateTime.now()),
				new Contact("Juan", "juan@gmail.com", LocalDateTime.now()),
				new Contact("Marcelo", "marcelo@gmail.com", LocalDateTime.now()),
				new Contact("Luis", "luis@gmail.com", LocalDateTime.now()),
				new Contact("Paola", "paola@gmail.com", LocalDateTime.now())
			);
			contactRepository.saveAll(contacts);
			
		};
	}

}
