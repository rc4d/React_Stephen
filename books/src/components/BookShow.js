import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

const BookShow = ({book}) =>{
    const {deleteBook} = useBooksContext();
    const [edit, setEdit] = useState(false);
    const handleDeleteClick = () => {
        deleteBook(book.id);
    }
    const handleEditClick = () => {
        setEdit(!edit);
    };
    const handleOnSubmit = () => {
        setEdit(false);
    }
    let content = <h2>{book.title}</h2>;
    if(edit){
        content = <BookEdit onSubmit={handleOnSubmit} book={book} />;
    }
    return (
        <div className="book-show">
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button onClick={handleEditClick} className="edit">Edit</button>
                <button onClick={handleDeleteClick} className="delete">Delete</button>
            </div>
            
        </div>
    )
}

export default BookShow;