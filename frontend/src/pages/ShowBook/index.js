import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteBook } from "../../utils/api";
// import { CreateReview } from "../../components/CreateReview";
// import { CreateReview } from "../../components/CreateReview"

export default function ShowBook({ shownBook, books, setBooks, isLoggedIn }) {
  const initialState = [];
  const [editDeleteOptions, setEditDeleteOptions] = useState(initialState);

  useEffect(() => {
    if (isLoggedIn) {
      if (localStorage.admin === "yes") {
        setEditDeleteOptions(
          initialState.concat(
            <div key="1">
              <div>
                <Link to={`/editbook/${shownBook._id}`}>Edit Book</Link>
              </div>
              <div>
                <Link
                  onClick={() => {
                    deleteBook(shownBook._id);
                    const updatedArray = [...books];
                    for (let i = 0; i < updatedArray.length; i++) {
                      if (updatedArray[i]._id === shownBook._id) {
                        updatedArray.splice(i, 1);
                      }
                    }
                    setBooks(updatedArray);
                  }}
                  to="/bookhome"
                >
                  Delete Book
                </Link>
              </div>
              <div>
                <Link to="/bookhome">Back to Book list</Link>
              </div>
            </div>
          )
        );
      } else {
        setEditDeleteOptions(
          initialState.concat(
            <div key="2">
              <div>
                <Link to="/bookhome">Back to Book list</Link>
              </div>
            </div>
          )
        );
      }
    }
  }, [isLoggedIn, shownBook._id]);

  const displayReview = (reviews) => {
    if (!shownBook.reviews) return null;
    return reviews.map((review, i) => (
      <div key={i}>
        <p>Title: {review.title}</p>
        <p>Content: {review.content}</p>
        <p>Rating (out of 5): {review.rating}</p>
        <p>Reviewer: {review.reviewer}</p>
      </div>
    ));
  };

  return (
    <main>
      <div>
        <div className="showBook">
          <div>
            <img src={shownBook.image} alt="Books"></img>
          </div>
          <div>
            <p>{shownBook.title}</p>
            <p>Author: {shownBook.author}</p>
            <p>Published: {shownBook.published}</p>
            <p>ISBN: {shownBook.isbn}</p>
            <p>Language: {shownBook.language}</p>
            <p>Description: {shownBook.abstract}</p>
          </div>
        </div>
      </div>

      {/* <div>
        <p>Use the form below to leave a Review:</p> */}
      {/* <CreateReview /> */}
      {/* </div> */}

      {/* <div>
        <p>Reviews from Customers:</p>
        <div>{displayReview(shownBook.reviews)}</div>
      </div> */}
      {editDeleteOptions}
    </main>
  );
}
