import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing, tags1, tags2 } = book;

    console.log(book)

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div>
    <button className="px-5 py-2 btn btn-[23BE0A] text-green-500 border rounded-full border-green-500 mr-4 text-[23BE0A]">{tags1}</button>
    <button className="px-5 py-2 btn btn-[23BE0A] border rounded-full  border-green-500 mr-4 text-green-500">{tags2}</button>
  </div>
    <h2 className="card-title">{bookName}</h2>
    <h5>{author}</h5>
    <hr />
    <div className="mt-4 flex">
    <p>{category}</p>
        <h2 className="flex"><MdOutlineStarBorder className="text-2xl mr-2" ></MdOutlineStarBorder>{rating}</h2>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/book/${bookId}`}>
          <button className="btn btn-primary">View Details</button>
    </Link>
      
    </div>
  </div>
</div>
    );
};

export default Book;