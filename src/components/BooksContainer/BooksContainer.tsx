import React from "react";
import { Books } from "../Books/Books";
import { BooksProvider } from "./BooksContainer.model";

export const BooksContainer = () => {
    return (
        <BooksProvider>
            <Books />
        </BooksProvider>
    )
};
