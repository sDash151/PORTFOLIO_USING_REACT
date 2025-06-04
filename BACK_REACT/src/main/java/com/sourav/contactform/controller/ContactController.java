package com.sourav.contactform.controller;

import com.sourav.contactform.model.Contact;
import com.sourav.contactform.service.ContactService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;


@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<String> saveContact(@Valid @RequestBody Contact contact) {
        try {
            logger.info("📥 Received contact form submission: {}", contact);

            // Validate and save contact
            contactService.saveContact(contact);

            logger.info("✅ Contact saved to database successfully. ID: {}", contact.getId());

            return ResponseEntity.ok("Message received! Thank you, " + contact.getName() + "!");
        } catch (DataAccessException dae) {
            logger.error("❌ Database error saving contact: {}", dae.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Database error. Please try again later.");
        } catch (IllegalArgumentException iae) {
            logger.warn("⚠️ Validation error: {}", iae.getMessage());
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(iae.getMessage());
        } catch (Exception e) {
            logger.error("❌ Unexpected error: {}", e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred. Please try again later.");
        }
    }
}