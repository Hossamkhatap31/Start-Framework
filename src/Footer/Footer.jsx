import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <div className=' '>
      
        <div className={`${style.bg} bg-opacity-50 `}>
   
            <div className="container mb-0 py-4 ">
              <div className="row pt-4">
              <div className="col-md-4">  
                <div className="item text-white py-5">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">  
                <div className="item text-white py-5">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons">
                    <i className={`fa-brands fa-facebook mx-1 icon border border-1 p-2 rounded-circle ${style.icon}`}></i>
                    <i className={`fa-brands fa-twitter mx-1 icon border border-1 p-2 rounded-circle ${style.icon}`}></i>
                    <i className={`fa-brands fa-linkedin-in mx-1 icon border border-1 p-2 rounded-circle ${style.icon}`}></i>
                    <i className={`fa-solid fa-globe mx-1 icon border border-1 p-2 rounded-circle ${style.icon}`}></i>
                  </div>

                </div>
              </div>
              <div className="col-md-4">  
                <div className="item text-white py-5">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
              </div>
            </div>
               

           <p className={`${style.bg2} text-white p-4 mb-0`}>Copyright © Your Website 2021</p>
        </div>
        
           
        
      
    </div>
  )
}
