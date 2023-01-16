import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate = () =>{
    const {createBook} = useBooksContext();
    const [title, setTitle] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    };
    const handleChange = (event) => {
        const bookName = event.target.value;
        setTitle(bookName);
    }
    return (
        <div className='book-create' style={{opacity: "0.9", height:"250px"}}>
            <h1>Add a Book</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' type="text" onChange={handleChange} value={title} />
                <button className='button'>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;