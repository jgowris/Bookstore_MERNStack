import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createReview } from "../../utils/api";

export default function CreateReview() {
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  function handleChange(event) {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createReview(id, formState);
    navigate("bookhome");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Review Title:</label>
          </div>
          <div>
            <input
              required
              type="text"
              id="title"
              placeholder="Title of Review"
              onChange={handleChange}
              value={formState.title || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <label>How do you rate this book?: </label>
          </div>
          <div>
            <select
              id="rating"
              onChange={handleChange}
              value={formState.rating}
            >
              <option>Rating from 1-5</option>
              <option value="1">1 - Not so good</option>
              <option value="2">2 - okay</option>
              <option value="3">3 - Liked it</option>
              <option value="4">4 - Loved it</option>
              <option value="5">5 - AWESOME</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label>Please explain your rating:</label>
          </div>
          <div>
            <textarea
              id="content"
              rows="8"
              cols="20"
              placeholder="Content"
              onChange={handleChange}
              value={formState.content}
            ></textarea>
          </div>
        </div>
        <div>
          <div>
            <label>Reviewer:</label>
          </div>
          <div>
            <input
              type="text"
              id="reviewer"
              placeholder="Reviewer"
              onChange={handleChange}
              value={formState.reviewer || ""}
            />
          </div>
        </div>
        <div>
          <div>
            <input type="submit"></input>
          </div>
        </div>
      </form>
      <br></br>
    </div>
  );
}
