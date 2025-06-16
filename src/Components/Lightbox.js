import React from 'react'
import image1 from "../Components/Assests/image1.jpg";
import image2 from "../Components/Assests/image2.jpg";
import image3 from "../Components/Assests/image3.jpg";
import image4 from "../Components/Assests/image4.jpg";
import image5 from "../Components/Assests/image5.jpg";
import image6 from "../Components/Assests/image6.jpg";
import image7 from "../Components/Assests/image7.jpg";
import image8 from "../Components/Assests/image8.jpg";


const Lightbox = () => {
  return (
    <div>
      <div className='lightbox-sec'>
          <div className='text'>
          <div>
               <h2>Lightbox Section</h2>
          </div>
          <div className='sec-para'>
          <p>This is some text inside of a div block.</p>
          </div>
        </div>
        <div className='images'>
          <div className='row1'>
               <div>
                <img src={image1} alt='' id='img1'/>
               </div>
               <div>
                <img src={image2} alt='' id='img2'/>
               </div>
               <div>
                <img src={image3} alt='' id='img3'/>
               </div>
               <div>
                <img src={image4} alt='' id='img4'/>
               </div>
          </div>
          <div className='row2'>
               <div>
                <img src={image5} alt='' id='img5'/>
               </div>
               <div><img src={image6} alt=''  id='img6'/></div>
               <div><img src={image7} alt='' id='img7'/></div>
               <div><img src={image8} alt='' id='img8'/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
