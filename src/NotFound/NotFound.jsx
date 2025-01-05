import React from 'react'
import style from "./NotFound.module.css"

export default function NotFound() {
  return (
    <div className={`mt-5 pt-5 ${style.ch} d-flex justify-content-center align-items-center`}>
      <h1 className='border border-2 border-black border-opacity-50 rounded-4 p-5'>Page Not Found ^_^</h1>
    </div>
  )
}
