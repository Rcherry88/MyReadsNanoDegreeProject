import React from "react";
import Book from "./Book";

export default function Shelf() {
  return (
    <Shelf>
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid" />
      </div>
      <Book />
    </Shelf>
  );
}
