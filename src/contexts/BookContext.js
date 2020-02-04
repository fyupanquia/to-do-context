import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
    	{'title': "cmb 1", author:'author 1', id:1},
    	{'title': "cmb 2", author:'author 2', id:2},
    	{'title': "cmb 3", author:'author 3', id:3},
    ]);
    const state = {
        books
    };

    const addBook = ({title, author}) => {
    	setBooks([...books, {title, author, id: (books.length +1) }])
    }

    const removeBook = (id) => {
    	setBooks(books.filter(book => book.id!== id));
    }

    return <BookContext.Provider value={{ ...state, addBook, removeBook  }} >
        {children}
    </BookContext.Provider>
}


export default BookContextProvider