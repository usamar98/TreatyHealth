import React from 'react'
import './Header.css'
import Hospic_main from '../assets/Hospic_main.png'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <>
    <section className='section1 '>
    <div class="container-fluid">
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-light py-4 px-4">
      <div class="col-md-5">
        <a class="navbar-brand" href="#"><img src={logo} alt="" /><span class='logo-size'>treaty</span></a>
      </div>
      <div class="col-md-7">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav gap-5">
            <li class="nav-item home">
              <a class="nav-link home-2" href="#">Home</a>
              <span className='line'></span>
            </li>
            <li class="nav-item word-size">
              <a class="nav-link home" href="#">About</a>
            </li>
            <li class="nav-item word-size">
              <a class="nav-link home" href="#">Services</a>
            </li>
            <li class="nav-item word-size">
              <a class="nav-link home" href="#">Contact</a>
            </li>
            <li class="nav-item border border-2 rounded-pill radius ">
              <a class="nav-link pb-3 px-4 home " href="#">Login/Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>





<div className='main'>
<div className="container-fluid py-5">
  <p className='text-white text-center px-5 size'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate voluptates?<br/> Obcaecati mollitia perferendis harum quaerat voluptatibus iusto . </p>
  <img src={Hospic_main} alt="" className='img-fluid mx-auto d-block'/>
</div>
</div>
 
    </section>
   
    </>
  )
}

export default Header