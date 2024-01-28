package com.quote.demo;

import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="quotes")
@DynamicUpdate
public class Quote {
	
	@Id
	private Long id;
	private Long century;
	private String quote_kr;
	private String quote_en;
	private String person;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getCentury() {
		return century;
	}
	public void setCentury(Long century) {
		this.century = century;
	}
	public String getQuote_kr() {
		return quote_kr;
	}
	public void setQuote_kr(String quote_kr) {
		this.quote_kr = quote_kr;
	}
	public String getQuote_en() {
		return quote_en;
	}
	public void setQuote_en(String quote_en) {
		this.quote_en = quote_en;
	}
	public String getPerson() {
		return person;
	}
	public void setPerson(String person) {
		this.person = person;
	}
}
