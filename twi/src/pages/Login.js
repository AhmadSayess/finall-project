import React from "react";
import Wave from "../images/bk.png";
import Avatar from "../images/undraw_profile_pic_ic-5-t.svg";
import Logo from "../images/undraw_mobile_login_re_9ntv.svg";
import "../pages/Login.css";
function Login() {
  return (
    <>
      <img class="wave" src={Wave} alt=""/>
      <div class="wrapper">
        <div class="img">
          <img src={Logo} alt=""/>
        </div>
        <div class="login-content">
          <form action="#">
            <img src={Avatar} alt=""/>
            <h2 class="title">Welcome</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="text" class="input" placeholder="Username" />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <input type="password" class="input" placeholder="Password" />
              </div>
            </div>

            <input type="submit" class="btn" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
