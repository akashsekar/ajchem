import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import LOGO from "../../../assets/logo.png"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1></h1>
            <span></span>
          </div>
          {/* <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div> */}
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
          <Link to="/">
            <img src={LOGO} alt="logo" style={{paddingBottom: 20}} />
</Link>
            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i> */}
          </div>
          <div className='box link'>
            <h3>Menu</h3>
            <ul>
              <li><Link className="linkdrop" to="/">Home</Link></li>
              <li><Link className="linkdrop" to="/about">About</Link></li>
              <li><Link className="linkdrop" to="/contact">Contact</Link></li>
              
            </ul>
          </div>
          <div className='box link'>
            <h3>Products</h3>
            <ul>
            <li>
                    <Link to="/dietary-supplements" className="linkdrop" >Dietary Supplements</Link>
                  </li>
                  <li>
                    <Link to="/botanical-extracts" className="linkdrop" >Botanical Extracts</Link>
                  </li>
                  {/* <li>
                    <Link to="/phythochemicals" className="linkdrop" >Phythochemicals</Link>
                  </li> */}
            </ul>
          </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className='box last'>
            <h3>Reach Us At</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                14261, Southwest, 120th street Unit 108 111, Miami FL 33186.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +1 754 203-6714
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@ajchementerprises.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved 
        </p>
      </div>
    </>
  )
}

export default Footer
