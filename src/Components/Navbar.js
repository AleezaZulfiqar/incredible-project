import React from 'react';
import section from "../Components/Assests/section.jpg"


const Navbar = () => {
  return (
    <div className="main-section ">
     <nav class="navbar navbar-expand-lg" id='nav-sec'>
  <div class="container-fluid">
    <a class="navbar-brand" href="*">INCREDIBLE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="*" id='acc'>HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="*">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="*">GALLERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="*">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="image-sec flex-grow-1">
       <img src={section}/>
       <div className='image-text'>
          <div className='main-text'>
               <div className='heading'><h1>WELCOME TO THE INCREDDIBLE</h1></div>
               <div className='head-para'><p>This is some text inside of a div block.</p></div>
               <div className='btns'>
                    <button className='btn1'>Button text</button>
                    <button className='btn2'>Button text</button>
               </div>
          </div>
       </div>
      </div>
      
    </div>
  );
};

export default Navbar;



