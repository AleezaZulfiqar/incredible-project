import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact-sec'>
          <div className='text'>
          <div>
               <h2>Contact Form</h2>
          </div>
          <div className='sec-para'>
          <p>This is some text inside of a div block.</p>
          </div>
        </div>
        <div className='formm'>
          <form>
          <div className='inputs'>
               <input type='text' placeholder='Name'/>
               <input type='text' placeholder='Name'/>
               </div>
               <div className='area'>
               <textarea type='text' placeholder='Message' value="Message"></textarea>
               </div>
               <div className='mess'>
                    <button>Send Message</button>
               </div>
          </form>
        </div>
        <div className='copy'>
        <div className='copy-text'>
          <p >Copyright Incredible. Made in Webflow.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
