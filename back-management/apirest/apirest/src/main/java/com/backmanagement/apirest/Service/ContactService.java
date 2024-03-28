package com.backmanagement.apirest.Service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.backmanagement.apirest.Entity.Contact;
import com.backmanagement.apirest.Repository.ContactRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;

    public Iterable<Contact> findAll() {
        return contactRepository.findAll();
    }

    public Contact findById(Integer id) {
        return contactRepository
            .findById(id)
            .orElse(null);
    }

    public Contact create(Contact contact) {
        contact.setCreatedAt(LocalDateTime.now());
        return contactRepository.save(contact);
    }

    public Contact update(Integer id, Contact form) {
        Contact contactFromDb = findById(id);
        
        contactFromDb.setName(form.getName());
        contactFromDb.setEmail(form.getEmail());
        return contactRepository.save(contactFromDb);
    }

    public void delete(Integer id) {
        Contact contactFromDb = findById(id);
        contactRepository.delete(contactFromDb);
    }

}
