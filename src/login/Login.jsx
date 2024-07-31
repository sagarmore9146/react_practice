import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="addUser">
        <h3>Sign In</h3>
        <form className="addUserForm">
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your Email"
            ></input>

            <label htmlFor="name">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="Enter your Password"
            ></input>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="login">
          <p>Don't have account ?</p>
          <Link to="/" type="sumbit" class="btn btn-success">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
