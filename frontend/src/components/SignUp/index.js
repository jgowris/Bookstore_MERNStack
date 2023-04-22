import { useState, useEffect } from "react";
import { createUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function SignUp(props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser(formData).then((data) => {
      localStorage.username = data.username;
      localStorage.admin = data.admin;
      localStorage.token = data.token;
      props.setLoginStatus(true);
    });
  }

  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/bookhome");
    }
  }, [props.isLoggedIn]);

  return (
    <div className="parent">
      <form className="child">
        <div className="fieldDisp">Sign up to Create an Account</div>
        <div className="fieldDisp">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldDisp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldDisp">
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
        <br></br>
      </form>
    </div>
  );
}
