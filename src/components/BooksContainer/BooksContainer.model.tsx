import React, { createContext, useState, useEffect } from "react";
import { IBook } from "../Book/Book.type";
import booksContainerCtrl from "./BooksContainer.ctrl";
import { IBooksContext, IBooksState, IContextChildren } from "./BooksContainer.type";

const BooksContext = createContext<IBooksContext | null>(null);

function BooksProvider({ children }: IContextChildren) {

  const [books, setBooks] = useState<IBooksState>({
    allBooks: [],
    privateBooks: [],
    booksToShow: [],
    isPrivateBooks: false,
    isFetchBooksErr: false
  });

  useEffect(() => {
    (async () => {
      const fetchedAllBooks = await booksContainerCtrl.getAllBooks();
      const fetchedPrivateBooks: IBook[] = await booksContainerCtrl.getPrivateBooks();
      if (!fetchedAllBooks.length || !fetchedPrivateBooks.length) {
        setBooks((prevState: IBooksState) => ({ ...prevState, isFetchBooksErr: true }));
      };

      setBooks((prevState: IBooksState) => ({
        ...prevState,
        allBooks: fetchedAllBooks,
        booksToShow: fetchedAllBooks,
        privateBooks: fetchedPrivateBooks
      }));
    })();
  }, []);

  useEffect(() => {
    setBooks((prevState: IBooksState) => ({ ...prevState, booksToShow: prevState.isPrivateBooks ? prevState.privateBooks : prevState.allBooks }));
  }, [books.isPrivateBooks]);

  const toggleBooksView = () => {
    setBooks((prevState: IBooksState) => ({ ...prevState, isPrivateBooks: !prevState.isPrivateBooks }));
  };

  const addBook = (name: string, author: string): Promise<boolean | null> => {
    const isBookAdded = booksContainerCtrl.addBook(name, author);
    return isBookAdded;
  };

  return (
    <BooksContext.Provider value={{
      isFetchBooksErr: books.isFetchBooksErr,
      isPrivateBooks: books.isPrivateBooks,
      booksToShow: books.booksToShow,
      toggleBooksView,
      addBook
    }}>
      {children}
    </BooksContext.Provider>
  );
}

export { BooksContext, BooksProvider };
