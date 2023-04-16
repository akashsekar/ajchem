import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB "}>
            <li onClick={() => setClick(false)}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div onClick={handleDropdownClick} className="dropdown-link" style={{color:'white'}}>
                All Products {showDropdown ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
              </div>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li onClick={() => setClick(false)}>
                    <Link onClick={handleDropdownClick} to="/dietary-supplements" className="linkdrop" >Dietary Supplements</Link>
                  </li >
                  <li onClick={() => setClick(false)}>
                    <Link onClick={handleDropdownClick} to="/botanical-extracts" className="linkdrop" >Botanical Extracts</Link>
                  </li>
                  {/* <li>
                    <Link onClick={handleDropdownClick} to="/phythochemicals" className="linkdrop" >Phythochemicals</Link>
                  </li> */}
                </ul>
              )}
            </li>
            <li onClick={() => setClick(false)}>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li> */}
            <li onClick={() => setClick(false)}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/contact">
          <div className="start">

            <div className="button">Contact Us</div>
          </div>
          </Link>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
