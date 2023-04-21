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
    createBook(formState).then((data) => {
      const updatedArray = [...books]; //Updates list of books on home page
      updatedArray.push(data);
      setBooks(updatedArray);
      navigate("/bookhome");
    });
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <form class="child" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
