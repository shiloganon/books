import React, { useContext } from "react";
import { BooksContext } from "../BooksContainer/BooksContainer.model";
import { Book } from "../Book/Book";
import { EMsg } from "../../enums/messages.enum";
import { IBook } from "../Book/Book.type";
import { IBooksContext } from "../BooksContainer/BooksContainer.type";
import "./Books.css"

export const Books = () => {
  const { booksToShow, toggleBooksView, addBook, isPrivateBooks, isFetchBooksErr } = useContext(BooksContext) as IBooksContext;

  const onAddBook = async () => {
    let name = prompt('Name', 'postnikov');
    let author = prompt('Author', 'x_author');
    if (!name || !author) return alert(EMsg.ERR)

    const isBookAdded: boolean | null = await addBook(name, author);
    alert(isBookAdded ? EMsg.SUCCESS : EMsg.ERR);
  };

  const renderBooks = () => {
    if (isFetchBooksErr) return <div>{EMsg.FAILED_FETCH_BOOKS}</div>;
    else if (!booksToShow.length) return <div>Loading...</div>;

    return (
      <div className="books">
        {booksToShow.map((book: IBook, i: number) => <Book book={book} key={i} />)}
      </div>
    );
  };

  return (
    <div>
      <section className="btn-container">
        <button className="btn" onClick={toggleBooksView}>
          {isPrivateBooks ? 'Show all books' : 'show private books'}
        </button>
        <button className="btn" onClick={onAddBook}>Add</button>
      </section>

      {renderBooks()}
    </div>
  );
};
