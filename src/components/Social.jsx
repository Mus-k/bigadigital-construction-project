import React from 'react'
import './Social.css'
export const Social = () => {
  return (
    <div className='socialContainer'>
        <div className='social-left'>
            <p><i class="fa-solid fa-envelope"></i>bigidigital@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i>+235849589</p>
        </div>
        <div className='social-right'>
            <p><i class="fa-brands fa-whatsapp"></i></p>
            <p><i class="fa-brands fa-facebook"></i></p>
            <p><i class="fa-brands fa-instagram"></i></p>
            <p><i class="fa-brands fa-twitter"></i></p>
           
        </div>
    </div>
  )
}
