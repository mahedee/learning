package com.pluralsight.bookstore.repository;

import com.pluralsight.bookstore.model.Book;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

@Transactional(SUPPORTS)
public class BookRepository {

    @PersistenceContext(unitName = "bookStorePU")
    private EntityManager em;


    //@Transactional(SUPPORTS)
    public Book Find(Long id){
        return em.find(Book.class, id);
    }

    @Transactional(REQUIRED)
    public Book Create(Book book){
        em.persist(book);
        return  book;
    }

    @Transactional(REQUIRED)
    public void Delete(Long id){
       em.remove(em.getReference(Book.class,id));
    }

    //@Transactional(SUPPORTS)
    public List<Book> findAll() {
        TypedQuery<Book> query = em.createQuery( "SELECT b FROM Book b ORDER BY b.title" , Book.class);
        return query.getResultList();
    }

    //@Transactional(SUPPORTS)
    public Long countAll(){
        TypedQuery<Long> query = em.createQuery( "select count(b) from Book b", Long.class);
        return  query.getSingleResult();
    }

}
