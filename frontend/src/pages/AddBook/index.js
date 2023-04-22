import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../utils/api";
import "./style.css";

function AddBook({ books, setBooks }) {
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(formState).then((bookdata) => {
      const updatedArray = [...books]; //Updates list of books on home page
      updatedArray.push(bookdata);
      setBooks(updatedArray);
      navigate("/bookhome");
    });
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <div className="parent">
      <form className="child" onSubmit={handleSubmit}>
        <h2>Add a Book</h2>
        <br></br>
        <div>
          <div>
            <label htmlFor="title">Book Name:</label>
          </div>
          <div>
            <input
              required
              type="text"
              id="title"
              placeholder="Book name"
              onChange={handleChange}
              value={formState.title || ""}
            />
          </div>
        </div>
        <br></br>
        <div>
          <div>
            <label htmlFor="author">Author:</label>
          </div>
          <div>
            <input
              type="text"
              id="author"
              placeholder="Author name"
              onChange={handleChange}
              value={formState.author || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Published:</label>
          </div>
          <div>
            <input
              type="text"
              id="published"
              placeholder="published date"
              onChange={handleChange}
              value={formState.published || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>ISBN: </label>
          </div>
          <div>
            <input
              type="text"
              id="isbn"
              placeholder="isbn"
              onChange={handleChange}
              value={formState.isbn || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Description:</label>
          </div>
          <div>
            <input
              type="text"
              id="abstract"
              placeholder="Description"
              onChange={handleChange}
              value={formState.abstract || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Language: </label>
          </div>
          <div>
            <input
              type="text"
              id="language"
              placeholder="language"
              onChange={handleChange}
              value={formState.language || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Copies: </label>
          </div>
          <div>
            <input
              type="text"
              id="copies"
              placeholder="copies"
              onChange={handleChange}
              value={formState.copies || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Bookcover Image: </label>
          </div>
          <div>
            <input
              type="text"
              id="image"
              placeholder="Book cover Image"
              onChange={handleChange}
              value={formState.image || ""}
            />
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default AddBook;
