import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './navbar.module.css'


export default function Navbar() {
  return (
    <div className={`${style.bg} fixed-top `}>
      <nav class=" navbar navbar-expand-lg  container">
      <Link className={`text-white text-decoration-none ps-2  ${style.homeName}`} to="">START FRAMEWORK</Link>
      <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
      <ul className=' list-unstyled d-flex gap-3 p-4 container mb-0 justify-content-center align-items-center'>
        <li className='ms-auto'><NavLink className={`text-white text-decoration-none  ${style.linkName}`} to="about">ABOUT</NavLink></li>
        <li ><NavLink className={`text-white text-decoration-none  ${style.linkName}`} to="portfolio">PORTFOLIO</NavLink></li>
        <li><NavLink className={`text-white text-decoration-none  ${style.linkName}`} to="contact">CONTACT</NavLink></li>
      </ul>
      </div>
      </nav>
    </div>
  )
}
