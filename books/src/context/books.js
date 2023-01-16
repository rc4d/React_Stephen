import {createContext, useCallback, useState} from 'react';
import axios from 'axios'

const BookContext = createContext();

const Provider = ({children}) => {
    
    const [books, setBooks] = useState([]);
    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }, [])
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books",{
            title
        });
        const updateBooks = [...books, response.data];
        setBooks(updateBooks);
    }
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });

        const updateBooks = books.map((book) =>{
            if(book.id === id){
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updateBooks);
    }

    const deleteBook = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updateBooks = books.filter((book) => book.id !==id);
        setBooks(updateBooks);
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBook
    }
    return (
    <BookContext.Provider value={valueToShare}>
        {children}
    </BookContext.Provider>)
}

export {Provider};
export default BookContext;