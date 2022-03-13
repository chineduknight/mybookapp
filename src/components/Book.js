import PropTypes from "prop-types";
import React from "react";
/**
 * Handles the display of books
 *
 * @param {string} book - the book obj
 * @param {string} handleUpdate - A function to handle the shelf
 *
 * @return {JSX} Returns a React.Node

 */

const Book = (props) => {
  const { book, handleUpdate } = props;
  const { title, authors = [], imageLinks, shelf = "none" } = book;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks?.smallThumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={(e) => handleUpdate(e.target.value, book)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title} </div>
      <div className="book-authors">{authors.join(", ")}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func,
};
export default Book;
