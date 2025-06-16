import React from 'react'

const Section = () => {
  return (
    <div>
      <div className='section-head' id='About'>
        <div className='text'>
          <div>
               <h2>SECTION HEADING</h2>
          </div>
          <div className='sec-para'>
          <p>This is some text inside of a div block.</p>
          </div>
        </div>
        <div className='cards'>
           <div className='card1'>
               <i class="fa-solid fa-video fa-2xl" id='cam'></i>
                <div className='card-text'>
                    <h5>Style 1</h5>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse varius 
                    enim in eros elementum tristique.</p>
                    <p className='text-link'>Text Link</p>
                </div>
           </div>
           <div className='card1'>
                  <i class="fa-solid fa-table" id='set'></i>
                <div className='card-text1'>
                    <h5>Style 1</h5>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse varius 
                    enim in eros elementum tristique.</p>
                    <p className='text-link'>Text Link</p>
                </div>
           </div>
           <div className='card1'>
                        <i class="fa-solid fa-gear fa-2xl" id="cam"></i>
                <div className='card-text'>
                    <h5>Style 1</h5>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse varius 
                    enim in eros elementum tristique.</p>
                    <p className='text-link'>Text Link</p>
                </div>
           </div>
           <div className='card1'>
               <i class="fa-solid fa-cloud fa-2xl"  id='cam'></i>
                <div className='card-text'>
                    <h5>Style 1</h5>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse varius 
                    enim in eros elementum tristique.</p>
                    <p className='text-link'>Text Link</p>
                </div>
           </div>
        </div>
      </div>
      <div className='some-text'>
          <div>
               <h2>Here you can put some text</h2>
          </div>
          <div className='call'>
               <button>Call To Action</button>
          </div>
      </div>
    </div>
  )
}

export default Section;
