import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUserName } from "../../utils/api";
import "./style.css";

export default function Nav(props) {
  const initialState = [
    <div key="1">
      <Link to="/">
        <h4>My Bookstore</h4>
      </Link>
    </div>,
  ];
  const [navItems, setNavItems] = useState(initialState);

  useEffect(() => {
    if (props.isLoggedIn) {
      if (localStorage.admin == "yes") {
        setNavItems(
          initialState.concat(
            <div key="2">
              For Admins only: <Link to="/bookhome/addbook">Add a Book</Link>
            </div>,
            <div key="3">
              <p>Logged in as {localStorage.username}</p>
              <button
                onClick={() => {
                  props.logout();
                }}
              >
                Logout
              </button>
            </div>
          )
        );
      } else {
        setNavItems(
          initialState.concat(
            <div key="2">
              <p>Logged in as {localStorage.username}</p>
              <button
                onClick={() => {
                  props.logout();
                }}
              >
                Logout
              </button>
            </div>
          )
        );
      }
    } else {
      setNavItems(
        initialState.concat([
          <div key="3">
            <Link to="/user/login">Log In</Link>
          </div>,
        ])
      );
    }
  }, [props.isLoggedIn]);

  return <nav>{navItems}</nav>;
}
