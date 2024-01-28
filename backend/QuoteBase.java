package com.quote.demo;

import org.springframework.data.repository.CrudRepository;

public interface QuoteBase extends CrudRepository<Quote, Long> {

	Iterable<Quote> findByCentury(Long century);

}
