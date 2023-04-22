import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import BookHome from "./pages/BookHome";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import ErrorPath from "./pages/ErrorPath";

import Login from "./components/Login";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";

import "./App.css";
// import { showBook } from "./utils/api";

function App() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [shownBook, setShownBook] = useState({});

  const urlvar = "https://bookstore-mernstack.herokuapp.com";

  useEffect(() => {
    if (localStorage.token) {
      setLoginStatus(true);
    }
  }, []);

  useEffect(() => {
    async function getIndexRoute() {
      const bookData = await axios.get(`${urlvar}/book`);
      setBooks(bookData.data);
    }
    getIndexRoute();
  }, []);

  function logout() {
    setLoginStatus(false);
    localStorage.clear();
    navigate("/");
  }

  async function getBookById(id) {
    const shownBookData = await axios.get(`${urlvar}/book/${id}`);
    setShownBook(shownBookData.data);
  }

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} logout={logout} />

      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus} />
          }
        />

        <Route
          path="/bookhome"
          element={
            <BookHome
              getBookById={getBookById}
              books={books}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route
          path="/user/login"
          element={
            <Login isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus} />
          }
        />

        <Route
          path="/user/signup"
          element={
            <SignUp isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus} />
          }
        />
        <Route
          path="/bookhome/addbook"
          element={
            <AddBook
              books={books}
              setBooks={setBooks}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/bookhome/:id"
          element={
            <ShowBook
              shownBook={shownBook}
              books={books}
              setBooks={setBooks}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/editbook/:id"
          element={
            <EditBook
              shownBook={shownBook}
              setShownBook={setShownBook}
              books={books}
              setBooks={setBooks}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/*" element={<ErrorPath />}></Route>
      </Routes>
    </div>
  );
}
export default App;
