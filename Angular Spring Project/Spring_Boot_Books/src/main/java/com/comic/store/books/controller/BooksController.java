package com.comic.store.books.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comic.store.books.model.Books;
import com.comic.store.books.repository.BooksRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BooksController {
	
	@Autowired
	BooksRepository booksRepository;
	
	@GetMapping("/AllBooks")
	public List<Books> getAllBooks() {
		
		return booksRepository.findAll();
		
	}

}
