import React, { useState, useEffect } from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import InputIcon from '@mui/icons-material/Input';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom'
import MessageIcon from '@mui/icons-material/Message';
import './nav.css';

import AOS from "aos";
import "aos/dist/aos.css";
// import Logo from '../../twi.png'


function Nav() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div className='nav'  >
      <div data-aos-duration="1500" data-aos="fade-down">
        {/* <img id="img" src={Logo} alt='' /> */}
        <h3 id='h3'>T W I</h3>
      </div>
      <ul>

        <NavLink  style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Admins'>
          <li style={{ backgroundColor: "inherit" }} data-aos-duration="1500" data-aos="fade-right">
            <PersonOutlinedIcon className='icon' />
            <span className='ms-3'>Admins</span>
          </li>
        </NavLink>



        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/postes'>
          <li data-aos-duration="1500" data-aos="fade-right"  style={{ backgroundColor: "inherit" }}>
            <PostAddIcon className='icon' />
            <span className='ms-3'>Postes</span>
          </li>
        </NavLink>

        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Category'>
          <li data-aos-duration="1500" data-aos="fade-right"  style={{ backgroundColor: "inherit" }}>
            <AutoAwesomeMotionIcon className='icon' />
            <span className='ms-3'>Category</span>
          </li>
        </NavLink>

        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Employees'>
          <li data-aos-duration="1500" data-aos="fade-right"   style={{ backgroundColor: "inherit" }}>
            <GroupAddOutlinedIcon className='icon' />
            <span className='ms-3'>Employee</span>
          </li>
        </NavLink>

        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Teams'>
          <li data-aos-duration="1500" data-aos="fade-right"  style={{ backgroundColor: "inherit" }}>
            <GroupsOutlinedIcon className='icon' />
            <span className='ms-3'>Teams</span>
          </li>
        </NavLink>

        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Projects'>
          <li data-aos-duration="1500" data-aos="fade-right"  style={{ backgroundColor: "inherit" }}>
            <AccountTreeOutlinedIcon className='icon' />
            <span className='ms-3'>Projects</span>
          </li>
        </NavLink>
{/* 
        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Aboutus'>
          <li data-aos-duration="1500" data-aos="fade-right"  style={{ backgroundColor: "inherit" }}>
            <InfoIcon className='icon' />
            <span className='ms-3'>About us</span>
          </li>
        </NavLink> */}

        <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'var(--buttonhover1)', color: 'var(--textcolor1)' } : { backgroundColor: 'transparent' })} to='/dashboard/Messages'>
          <li data-aos-duration="1500" data-aos="fade-right"  style={{ backgroundColor: "inherit" }}>
            <MessageIcon className='icon' />
            <span className='ms-3'>Messsages</span>
          </li>
        </NavLink>

      </ul> 
      
      <NavLink to='/'  >
        <li
          className='logout'
        >
          <InputIcon data-aos-duration="1500" data-aos="fade-up"
            sx={{ fontSize: 40 }}
            className="LogOut" />
        </li> </NavLink>
    </div>
  )
}

export default Nav