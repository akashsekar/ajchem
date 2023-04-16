import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import { useLocation } from "react-router-dom"


const Pricing = () => {
  const location = useLocation()
  let title
  if (location.pathname === "/dietary-supplements") {
    title = "Dietary Supplements"
  } else if (location.pathname === "/botanical-extracts") {
    title = "Botanical Extracts"
  } else if (location.pathname === "/phythochemicals") {
    title = "Phytochemicals"
  }

  return (
    <>
      <Back title={title} />
      <section className='price'>
        <div className='container grid'>
          {/* <PriceCard /> */}
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
