import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadbooks } from "../utility/localstorage";


const BookList = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const handleBooksFilter = filter => {
        if(filter === 'rating'){
            setDisplayBooks(readBooks);
        }
        else if ( filter === 'totalPages'){
            const totalPages = readBooks.filter(book => book. Number_of_pages === 'totalPages')
            setDisplayBooks(totalPages);
        }
        else if(filter === 'yearOfPublishing'){
            const year_of_publishing = readBooks.filter(book => book. Year_of_publishing === 'yearOfPublishing');
            setDisplayBooks(year_of_publishing)
        }
    }


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
            setDisplayBooks(readBooks);
        }
    }, [books])
    return (
        <div>
            <h2 className="text-2xl">This is book list page: {readBooks.length}</h2>

            {/* ------------dropdown------------- */}

            <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick = { () => handleBooksFilter('rating')}><a>Rating</a></li>
    <li onClick={() => handleBooksFilter ('totalPages')}><a>Number of pages</a></li>
    <li onClick = {() => handleBooksFilter('yearOfPublishing')}> <NavLink>Publisher year </NavLink> </li>
  </ul>
</details>

            <ul>
                {
                    displayBooks.map(book => <li
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