import React from "react"
import LOGO from "../../../assets/logo.png"
import { Link } from "react-router-dom"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <Link to="/">
            <img src={LOGO} alt="logo" />
    </Link>
          </div>
            {/* <h1>ACADEMIA</h1> */}
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}

          {/* <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Head
