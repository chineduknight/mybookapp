import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";
import _ from "lodash";
import Loader from "../components/Loader";
const Search = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChanged = _.debounce(async function (event) {
    const searchTerm = event.target.value;
    setsearchTerm(searchTerm);
    if (searchTerm) {
      setIsLoading(true);
      const searchResult = await BooksAPI.search(searchTerm);
      if (Array.isArray(searchResult)) {
        setBooks(searchResult);
      } else {
        setBooks([]);
      }
    } else {
      setBooks([]);
    }
    setIsLoading(false);
  }, 1000);
  const onSelect = async (toShelf, book) => {
    await BooksAPI.update(book, toShelf, book);
    const searchResult = await BooksAPI.search(searchTerm);
    setBooks(searchResult);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => navigate(-1)}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
          <input
            type="text"
            placeholder="Search by title or author"
            // value={searchTerm}
            onChange={handleChanged}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {isLoading ? (
            <Loader />
          ) : searchTerm && books.length === 0 ? (
            <div>Nothing found</div>
          ) : (
            books.map((book) => (
              <Book key={book.id} book={book} handleUpdate={onSelect} />
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
