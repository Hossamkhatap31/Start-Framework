import React from 'react'
import style from "./home.module.css"
import logo from "../assets/avataaars.svg"

export default function Home() {
  return (
    <div className={` ${style.bg} ${style.height} mt-5 pt-5`}>
      <div className=' home w-50 m-auto d-flex align-items-center pt-5 flex-column'>
        <img src={logo} alt="" className={`${style.picw} pt-5 mb-3`} />
        <h1 className='text-white pt-3 fw-bold'>START FRAMEWORK</h1>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className={`${style.line} ${style.lineColor} me-2`}></div>
          <i  className="fa-solid fa-star text-white"></i>
          <div className={`${style.line} ${style.lineColor} ms-2`}></div>
        </div>
        <p className='text-white pb-5'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      
    </div>
  )
}
