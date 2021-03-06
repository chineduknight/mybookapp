import React from "react";
import PropTypes from "prop-types";

/**
 * Minor abstraction for the shelf
 *
 * @param {string} header - the shelf heading eg Currently Reading
 *
 * @return {JSX} Returns a React.Node

 */
const BookShelf = (props) => {
  const { children, header } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{children}</ol>
      </div>
    </div>
  );
};
BookShelf.propTypes = {
  header: PropTypes.string.isRequired,
};
export default BookShelf;
