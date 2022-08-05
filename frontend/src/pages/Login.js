import React,{useState} from "react";
import Wave from "../images/bk.png";
import Avatar from "../images/undraw_profile_pic_ic-5-t.svg";
import Logo from "../images/undraw_mobile_login_re_9ntv.svg";
import {FaUserAlt} from "react-icons/fa"
import {FaLock} from 'react-icons/fa'
// import "../pages/Login.css";
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Login() {
  toast.configure();

  const [adminlogin,setAdminLogin] = useState({
    email:"",
    password:""
  })
  const navigate =useNavigate()
  const loginHandleChange = (e) => {
    let {name,value} = e.target;
    setAdminLogin({...adminlogin,[name]:value});
};
  const loginHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email:adminlogin.email,
      password:adminlogin.password
    };
    axios.post("http://localhost:5000/api/admin/login",data)
    .then(res =>{
      if(res.status === 200){
        setAdminLogin({
          email:"",
          password:""
        });
        toast.success("Logged In Successfully")
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("id",res.data.admin.id)
        navigate('/dashbord')
        window.location.reload("");
      }
    })
    .catch(err =>{
      console.log(err);
      toast.error("Error While Logging in")
    })
  }
  return (
    <>
      <img class="wave" src={Wave} alt=""/>
      <div class="wrapper">
        <div class="img">
          <img src={Logo} alt=""/>
        </div>
        <div class="login-content">
          <form onSubmit={loginHandleSubmit}>
            <img src={Avatar} alt=""/>
            <h2 class="title">Welcome </h2>
            <div class="input-div one">
              <div class="i">
                <FaUserAlt></FaUserAlt>
              </div>
              <div class="div">
                <input className="input" type="text" name="email" onChange={loginHandleChange} value={adminlogin.email}  placeholder="Enter Your Email" />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
               <FaLock></FaLock>
              </div>
              <div class="div">
                <input  className="input" type="password" name="password" onChange={loginHandleChange} value={adminlogin.password}  placeholder="Enter Your Password vdfvdfvdfvdfvdfvdvd" />
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
