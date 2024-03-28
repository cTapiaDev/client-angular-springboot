package com.backmanagement.apirest.Repository;

import org.springframework.data.repository.CrudRepository;

import com.backmanagement.apirest.Entity.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}
