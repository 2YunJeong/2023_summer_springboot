package com.quote.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {

	@Autowired
	QuoteBase qb;
	@Autowired
	PersonBase pb;
	
	// 명언 table의 데이터 출력
	public Iterable<Quote> getQuotes() {
		return qb.findAll();
	}
	
	// 명언 table에서 특정 명언 데이터 출력
	public Iterable<Quote> getQuotesByCentury(Long century) {
		return qb.findByCentury(century);
	}
	
	// 인물 table의 데이터 출력
	public Iterable<Person> getPerson() {
		return pb.findAll();
	}
	
	// 인물 table에서 특정 인물 데이터 출력
	public Person getPersonByName(String name) {
		return pb.findByName(name);
	}

}
