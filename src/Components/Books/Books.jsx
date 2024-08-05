import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    const [dataLength, setDataLength] = useState(6);

    useEffect( () => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <div className="text-center">
                 <h2 className="text-5xl">Books : {books.length}</h2>
            </div>
            <div className="grid grid-cols-3 gap-12">
                {
                    books.slice(0,dataLength).map(book => <Book
                    book={book}
                    key={book.bookId}
                    >

                    </Book> )
                }
            </div>
            <div className= {dataLength === books.length && 'hidden'}>
                <button onClick={() => setDataLength(books.length)} className="btn btn-primary">Shaw all books</button>
            </div>
        </div>
    );
};

export default Books;