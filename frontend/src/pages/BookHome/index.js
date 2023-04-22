import { Link } from "react-router-dom";
import "./style.css";

export default function BookHome({ books, getBookById }) {
  return (
    <div>
      <div className="home_pg">
        {books &&
          books.map((book, i) => {
            return (
              <div key={i}>
                <div className="booktile">
                  <Link
                    onClick={() => getBookById(book._id)}
                    to={`/bookhome/${book._id}`}
                  >
                    <img src={book.image} alt="Books"></img>
                  </Link>
                  <div>
                    <div>{book.title}</div>
                    <p>Author: {book.author}</p>
                  </div>
                  <div>
                    <span>#{book.language}</span>
                    <span>#{book.classification}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
