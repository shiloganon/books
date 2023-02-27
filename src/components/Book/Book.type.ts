export interface IBookProps {
    book: IBook
}

export interface IBook {
    author: string;
    id: number;
    name: string;
    ownerId?: string;
}