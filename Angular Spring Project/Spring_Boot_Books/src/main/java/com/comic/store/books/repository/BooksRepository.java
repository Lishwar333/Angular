package com.comic.store.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.comic.store.books.model.Books;

@Repository
public interface BooksRepository extends JpaRepository<Books, Integer>{

}
