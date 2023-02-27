import React, { FC } from "react";
import bookImg from "../../assets/imgs/book-img.jpeg"
import { IBookProps } from "./Book.type";
import './Book.css'

export const Book: FC<IBookProps> = ({ book }) => {
    return (
        <div>
            <img src={bookImg} className="img" alt="book-image" />
            <section className="book-details">
                <span>Book author: {book.author}</span>
                <span>Book name: {book.name}</span>
            </section>
        </div>
    );
};
