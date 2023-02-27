import { IBook } from "../Book/Book.type";

export interface IBooksState {
    allBooks: IBook[];
    privateBooks: IBook[];
    booksToShow: IBook[];
    isPrivateBooks: boolean;
    isFetchBooksErr: boolean;
}

export interface IBooksContext {
    booksToShow: IBook[];
    toggleBooksView: () => void;
    addBook: (name: string, author: string) => Promise<boolean | null>;
    isPrivateBooks: boolean;
    isFetchBooksErr: boolean;
}

export interface IContextChildren {
    children: React.ReactNode
}