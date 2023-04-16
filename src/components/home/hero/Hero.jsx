import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='AJ CHEM ENTERPRISES' title='Empowering Industries with Sustainable Chemical Solutions' />
            <p>We are a leading supplier of high-quality chemical products, providing innovative solutions for various industries including cosmetics, pharmaceuticals, and nutraceuticals.</p>
            <Link to="/contact">
            <div className='button'>
              <button className='primary-btn'>
                ENQUIRE NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
              </Link>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
