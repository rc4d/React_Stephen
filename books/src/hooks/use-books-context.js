import { useContext } from "react";
import BookContext from "../context/books";


const useBooksContext = () => useContext(BookContext);

export default useBooksContext;