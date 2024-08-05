import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

 import 'react-toastify/dist/ReactToastify.css';
import { savedReadBooks } from "../utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    // console.log(books)
   
    
    // const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookId);
    console.log(book, bookId)

    const handleReading = () => {
        savedReadBooks (bookId);
        toast('You have read this book successfully')
    }

    const handleWishlist = () => {
        toast ('added this boook in your wishlist')
    }


    return (
        <div>
            <h2>Book Details of: {book.bookName}</h2>
            <div className="grid gap-4 md:grid-cols-2 mx-12">
                 <div className="border md:col-span-1 " >
                    <h2 className="text-4xl">Details comming</h2>
                    <p className="font-bold">By: {book.author}</p>
                    <hr />
                    <p className="font-bold">category</p>
                    <hr />
                    <p><span className="font-bold">Review :</span> {book.review}</p>
                 </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <div className="flex gap-4">
                        <button onClick={handleReading} className="btn btn-primary ">Read</button>
                        <button onClick={handleWishlist} className="btn btn-primary  ">Wishlist</button>
                    </div>
                </div>
            </div>

             <ToastContainer />
           
        </div>
    );
};

export default BookDetails;