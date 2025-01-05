import React from 'react'
import style from './contact.module.css'


export default function Contact() {
  return (
    <div className='mt-5 pt-5 container mb-2 d-flex flex-column justify-content-center align-items-center'>
          
          <h1 className='pt-5 fw-bold mt-3'>CONTACT SECTION</h1>
          <div className='d-flex align-items-center justify-content-center mb-5'>
            <div className={`${style.line} ${style.lineColor} me-2`}></div>
                <i  className={`fa-solid fa-star  ${style.starColor}`}></i>
            <div className={`${style.line} ${style.lineColor} ms-2`}></div>
           </div>

           
           <form className='mb-3'>
             <input type="text" placeholder='userName' className='w-100 mb-4' />
             <input type="text" placeholder='userAge' className='w-100 mb-4' />
             <input type="email" placeholder='userEmail' className='w-100 mb-4' />
             <input type="password" placeholder='userPassword' className='w-100 mb-4' />
             <button className='btn btn-primary mt-4 d-block'>Send Message</button>
           </form>
          
           
    </div>       
  )
}
