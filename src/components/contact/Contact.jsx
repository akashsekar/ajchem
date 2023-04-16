import React, {useRef} from "react"
import emailjs from '@emailjs/browser'
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_93wkrxk', 'template_sweh592', form.current, 'k6md1mfXWaUjD5Mhk')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); // Reset the form fields
          alert("Message sent successfully!"); // Show a success message
      }, (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again later."); // Show an error message
      });
  };
  

  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.77851105135687!2d-80.42578411924576!3d25.656168656171147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c1bd92cec773%3A0x89519bb4d759c124!2s14261%20SW%20120th%20St%20108%20111%2C%20Miami%2C%20FL%2033186%2C%20USA!5e0!3m2!1sen!2sin!4v1681680644319!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any enquiries</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>14261, Southwest, 120th street Unit 108 111, Miami FL 33186.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +1 754 203-6714</p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className='flexSB'>
                <input name="user_name" type='text' placeholder='Name' />
                <input name="user_email" type='email' placeholder='Email' />
              </div>
              <div className='flexSB'>
                <input name="user_company" type='text' placeholder='Company Name' />
                <input name="user_phone" type='text' placeholder='Phone Number' />
              </div>
              {/* <input type='text' placeholder='Subject' /> */}
              <textarea placeholder="Write your message" name="message" cols='30' rows='10'/>
               
              <input type="submit" value="Send" className='primary-btn' />
            </form>

            {/* <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
