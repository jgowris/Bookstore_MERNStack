import { useState, useEffect } from "react";
import { loginToAccount } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login(props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginToAccount(formData).then((data) => {
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
        <div className="fieldDisp">LOG IN TO YOUR ACCOUNT</div>
        <div className="fieldDisp">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter user name"
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
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldDisp">
          <button onClick={handleSubmit}>Log In</button>
        </div>
        <br></br>
      </form>
    </div>
  );
}
