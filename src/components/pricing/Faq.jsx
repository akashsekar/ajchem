import React, { useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { product1, product2, product3 } from "../../dummydata"
import Heading from "../common/heading/Heading"

const Faq = () => {
  const [click, setClick] = useState(false)
  const location = useLocation()

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  // Choose the data to use depending on the pathname
  let faq
  if (location.pathname === "/dietary-supplements") {
    faq = product1
  } else if (location.pathname === "/botanical-extracts") {
    faq = product2
  } else if (location.pathname === "/phythochemicals") {
    faq = product3
  }

  return (
    <>
      <Heading subtitle='' title={'Products'} />
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => (
            <div className='box' key={index}>
              <button className='accordion' onClick={() => toggle(index)}>
                <h2>{val.name}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                 <p><b>Product Name:</b> {val.pname}</p>
                 {/* <p><b>Biomarker:</b> Aloin free</p> */}
                 <p><b>{val.methodtitle1}</b> {val.method1}</p>
                 <p><b>{val.gradetitle}</b> {val.grade}</p>
                 <p><b>{val.methodtitle2}</b> {val.method2}</p>
                 <p><b>{val.methodtitle3}</b> {val.method3}</p>
                 {/* <p><b>Description:</b>{val.desc}</p> */}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
