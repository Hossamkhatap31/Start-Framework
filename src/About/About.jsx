import React from 'react'
import style from './about.module.css'

export default function About() {
  return (
    <div className={` ${style.bg} ${style.height} mt-5 pt-5 d-flex`}>
          <div className=' home w-75 m-auto d-flex align-items-center pt-5 flex-column'>
            
            <h1 className='text-white pt-3 fw-bold'>ABOUT COMPONENT</h1>
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className={`${style.line} ${style.lineColor} me-2`}></div>
                   <i  className="fa-solid fa-star text-white"></i>
                <div className={`${style.line} ${style.lineColor} ms-2`}></div>
            </div>
            
            <div className='d-flex'>
              <div className="row">
                <div className="col-md-6">
                   <div>
                      <p className='px-3 text-start text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>  
                </div>
                <div className="col-md-6">
                   <div>
                      <p className='px-3 text-start text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>  
                </div>
              </div>
            </div>
          </div>
          
        </div>
  )
}
