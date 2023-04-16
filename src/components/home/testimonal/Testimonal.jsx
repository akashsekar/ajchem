import React from "react"
import { testimonal, testimonal1,testimonal2 } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='' title='Our Products' />
          
          <div className='content grid2'>
            {testimonal.map((val) => (
              <a href={val.url}>
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    {/* <i className='fa fa-quote-left icon'></i> */}
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                    <a href={val.url} className="explore__more">

                  <small>Explore More</small>

                  </a>
                  </div>
                </div>
                {/* <p>{val.desc}</p> */}
             
              </div>
              </a>
            ))}
          </div>
          {/* <Heading subtitle='' title='Formulations & CMPL' />
          
          <div className='content grid2'>
            {testimonal1.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
          <Heading subtitle='' title='Personal Care' />
          
          <div className='content grid2'>
            {testimonal2.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Testimonal
