import React from 'react'
import style from './portfolio.module.css'
import logo1 from '../assets/poert1.png'
import logo2 from '../assets/port2.png'
import logo3 from '../assets/port3.png'


export default function Portfolio() {
 
  
  function sayHello(){
    
    
  }
  
   
  

  return (
    
    <div className='mt-5 pt-5'>
      
      <h1 className='pt-5 fw-bold mt-3'>PORTFOLIO COMPONENT</h1>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className={`${style.line} ${style.lineColor} me-2`}></div>
            <i  className={`fa-solid fa-star  ${style.starColor}`}></i>
        <div className={`${style.line} ${style.lineColor} ms-2`}></div>
       </div>

       <div className="container mb-3">
         <div className="row g-5">
           <div className="col-lg-4 col-md-6">
             <div onClick={sayHello} className={`item ${style.pointer}`}>
               <img src={logo1} alt="" className='w-100 rounded-3 ' />
             </div>
           </div>
           <div className="col-lg-4 col-md-6">
             <div className={`item ${style.pointer}`}>
               <img src={logo2} alt="" className='w-100 rounded-3 ' />
             </div>
           </div>
           <div className="col-lg-4 col-md-6">
             <div className={`item ${style.pointer}`}>
               <img src={logo3} alt="" className='w-100 rounded-3 ' />
             </div>
           </div>
           <div className="col-lg-4 col-md-6">
             <div className={`item ${style.pointer}`}>
               <img src={logo1} alt="" className='w-100 rounded-3 ' />
             </div>
           </div>
           <div className="col-lg-4 col-md-6">
             <div className={`item ${style.pointer}`}>
               <img src={logo2} alt="" className='w-100 rounded-3 ' />
             </div>
           </div>
           <div className="col-lg-4 col-md-6">
             <div className={`item ${style.pointer}`}>
               <img src={logo3} alt="" className='w-100 rounded-3 ' />
             </div>
           </div>

         </div>
       </div>

      
    </div>
  )
}
