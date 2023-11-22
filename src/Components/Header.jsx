import React from 'react'
import './Header.css'
import Hospic_main from '../assets/Hospic_main.png'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <>
    <section className='section1 bg'>
    <div class="container-fluid ">

<nav class="navbar navbar-expand-lg d-flex justify-content-between px-5 py-4">
<div className='div-1'>
<a class="navbar-brand" href="#"><img src={logo} alt="" />treaty</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

    </div>

    <div className='div-2'>
    <div class="collapse navbar-collapse d-flex justify-content-between gap" id="navbarSupportedContent">
        <div className='div-ul'>
        <ul class="navbar-nav mr-auto">
  <li class="nav-item active">
    <a class="nav-link" href="#">Home </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item dropdown">
   <a class="nav-link" href="#">Services</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">Contact Us</a>
  </li>
</ul>

        </div>
 <div className='div-form'>
 <form class="form-inline my-2 my-lg-0">
  <a class="nav-link" href="#">Login/Register</a>
</form>

 </div>

</div>

    </div>

</nav>
</div>
<div className='main'>
<div className="container-fluid">
  <p className='text-white text-center px-5 size'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate voluptates? Obcaecati mollitia perferendis harum quaerat voluptatibus iusto eum et dicta aperiam iure. </p>
  <img src={Hospic_main} alt="" className='img-fluid mx-auto d-block'/>
</div>
</div>
 
    </section>
   
    </>
  )
}

export default Header