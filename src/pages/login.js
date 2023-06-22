import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Perform registration actions here
    
    // Redirect to the login page
    history.push("/dashboard");
  };
  return (
    <>
    <section className="signup">
    <div className="container mt-5">
      <div className="signup-content">
        
        <div className="signup-form">
          <h2 className="form-title">Login</h2>
          <form className="register-form" id="register-form">

            <div className="form-group">
              <label htmlFor="Email">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input type="Email" name="Email" id="Email" className="log" autoComplete="off" placeholder="Email/Phone No."/>
            </div>

            <div className="form-group">
              <label htmlFor="Password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input type="Password" name="Password" id="Password" className="log" autoComplete="off" placeholder="Password"/>
            </div>

            <div className="form-group form-button">
              <input type="submit" name="signin" id="signin" className="form-submit1" value="Login" onClick={handleLogin} />
            </div>

          </form>
          </div>
          
      <div className="signup-img">

<img
    src="./images/loginimg.jpg"
    alt="loginimg"
    className="img-fluid"
  />
  <NavLink to="/signup" class="nav-link active" aria-current="page">Create an account</NavLink>

<div/>
          
      </div>
    </div>
    </div>

   </section>
    
    </>
    
  );
};

export default Login;