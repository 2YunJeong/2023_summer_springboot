package com.quote.demo;

import org.springframework.data.repository.CrudRepository;

public interface PersonBase extends CrudRepository<Person, String> {
	
	Person findByName(String name);

}
