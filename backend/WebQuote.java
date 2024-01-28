package com.quote.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebQuote {
	
	@Autowired
	QuoteService qs;
	
	// 명언 table의 데이터 출력
	@GetMapping(path="/AllQuotes")
	public Iterable<Quote> getQuotes() {
		return qs.getQuotes();
	}
	
	// 명언 table에서 특정 명언 데이터 출력
	@GetMapping(path="/AllQuotes/{century}")
	public Iterable<Quote> getQuotesByCentury(@PathVariable Long century) {
		return qs.getQuotesByCentury(century);
	}
	
	// 인물 table의 데이터 출력
	@GetMapping(path="/AllPerson")
	public Iterable<Person> getPerson() {
		return qs.getPerson();
	}
	
	// 인물 table에서 특정 인물 데이터 출력
	@GetMapping(path="/AllPerson/{name}")
	public Person getPersonByName(@PathVariable String name) {
		return qs.getPersonByName(name);
	}
	
}