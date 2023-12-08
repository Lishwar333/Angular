package com.comic.store.books.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Books {
	
	@Id
	int id;
	String name;
	String book;
	String image;
	String amount;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBook() {
		return book;
	}
	public void setBook(String book) {
		this.book = book;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public Books(int id, String name, String book, String image, String amount) {
		
		this.id = id;
		this.name = name;
		this.book = book;
		this.image = image;
		this.amount = amount;
	}
	public Books() {
		
	}
	
	

}
