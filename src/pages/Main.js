import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_PATHS } from "../routes/constants";
import Book from "../components/Book";
import BookShelf from "../components/BookShelf";
import * as BooksAPI from "../BooksAPI";

const Main = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const getAllBooks = async () => {
    const bookList = await BooksAPI.getAll();
    setBooks(bookList);
  };
  const handleUpdate = async (toShelf, book) => {
    await BooksAPI.update(book, toShelf, book);
    getAllBooks();
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf header="Currently Reading">
            {books.length > 0 &&
              books.map((book) => {
                if (book.shelf === "currentlyReading") {
                  return (
                    <li key={book.id}>
                      <Book book={book} handleUpdate={handleUpdate} />
                    </li>
                  );
                }
                return null;
              })}
          </BookShelf>
          <BookShelf header="Want to Read">
            {books.length > 0 &&
              books.map((book) => {
                if (book.shelf === "wantToRead") {
                  return (
                    <li key={book.id}>
                      <Book book={book} handleUpdate={handleUpdate} />
                    </li>
                  );
                }
                return null;
              })}
          </BookShelf>
          <BookShelf header="Read">
            {books.length > 0 &&
              books.map((book) => {
                if (book.shelf === "read") {
                  return (
                    <li key={book.id}>
                      <Book book={book} handleUpdate={handleUpdate} />
                    </li>
                  );
                }
                return null;
              })}
          </BookShelf>
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => navigate(PUBLIC_PATHS.SEARCH)}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default Main;
