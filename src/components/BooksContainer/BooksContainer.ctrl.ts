import booksRepository from "../../Repositories/Books.repository";

const getAllBooks = () => {
    const fetchedAllBooks = booksRepository.getAllBooks();
    return fetchedAllBooks;
};

const getPrivateBooks = () => {
    const fetchedPrivateBooks = booksRepository.getPrivateBooks();
    return fetchedPrivateBooks;
};

const addBook = (name: string, author: string) => {
    const isBookAdded = booksRepository.addBook(name, author);
    return isBookAdded;
};

const booksContainerCtrl = {
    getAllBooks,
    getPrivateBooks,
    addBook
};

export default booksContainerCtrl;