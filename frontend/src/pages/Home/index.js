import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/bookhome");
    }
  }, [props.isLoggedIn]);

  //Rendering

  return (
    <div>
      <div>
        <h1>Welcome to My Bookstore</h1>
        <p>Your one stop shop for all books</p>
        <br></br>
        <h3>
          Do you wish to{" "}
          <Link to="/user/signup">
            <button> Sign Up</button>
          </Link>{" "}
          <Link to="/user/login">
            <button> Log In</button>
          </Link>
          or{" "}
          <Link to="/bookhome">
            <button> Browse as a guest</button>
          </Link>
        </h3>
        <br></br>
        {/* <img src="" alt="books"></img> */}
      </div>
    </div>
  );
}
