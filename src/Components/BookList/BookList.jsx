import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadbooks } from "../utility/localstorage";


const BookList = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);


    useEffect( ()  => {
        const storedBookIds = getStoredReadbooks();
        if(books.length > 0){
          /*   const readBooks = books.filter(books => storedBookIds.includes(book.bookId))
            console.log(readBooks) */


            // another way.....
            const readBooks = [];
            for(const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId)
                if(book){
                    readBooks.push(book)
                }
            } 


            setReadBooks(readBooks);
        }
    }, [])
    return (
        <div>
            <h2 className="text-2xl">This is book list page: {readBooks.length}</h2>

            {/* ------------dropdown------------- */}

            <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li> <NavLink>Publisher year </NavLink> </li>
  </ul>
</details>

            <ul>
                {
                    readBooks.map(book => <li
                    key={book.bookId}
                    >
                    <span>{book.bookName} {book.author} : published year: {book. yearOfPublishing}</span>


                    </li> )
                }
            </ul>
        </div>
    );
};

export default BookList;