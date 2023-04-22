import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editBook } from "../../utils/api";
import { updateBook } from "../../utils/api";

function EditBook({ shownBook, setShownBook, books, setBooks }) {
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setFormState(shownBook);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook(shownBook._id, formState);
    setShownBook(formState); //to update current book on show page)
    const updatedArray = [...books]; //updates list of books on home page

    for (let i = 0; i < updatedArray.length; i++) {
      if (updatedArray[i]._id === shownBook._id) {
        updatedArray[i] = formState;
      }
    }
    setBooks(updatedArray);
    navigate(`/bookhome/${shownBook._id}`);
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <div class="parent">
      <form class="child" onSubmit={handleSubmit}>
        <h2>Edit Book Details</h2>
        <br></br>
        <div>
          <div>
            <label htmlFor="title">Book name:</label>
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
            <label htmlFor="author">Author</label>
          </div>
          <div>
            <input
              type="text"
              id="author"
              placeholder="Author information"
              onChange={handleChange}
              value={formState.author || ""}
            />
          </div>
        </div>
        <br></br>
        <div>
          <div>
            <label htmlFor="published">Published:</label>
          </div>
          <div>
            <input
              type="text"
              id="published"
              placeholder="Date published"
              onchange={handleChange}
              value={formState.published || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="isbn">ISBN:</label>
          </div>
          <div>
            <input
              type="text"
              id="ISBN"
              placeholder="ISBN information"
              onChange={handleChange}
              value={formState.isbn || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <input type="submit" />
          </div>
        </div>
        <br></br>
      </form>
    </div>
  );
}
export default EditBook;
