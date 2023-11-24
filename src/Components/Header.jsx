import React ,{ Component }from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Header.css'
import Hospic_main from '../assets/Hospic_main.png'
import logo from '../assets/logo.jpg'


 
const Header = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  

  return (
    <>
    <section className='section1 '>
    <div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-evenly py-3 px-5">

    <a class="navbar-brand ms-5" href="#"><img src={logo} alt="" /><span class='logo-size'>treaty</span></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

     <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav navbar-navv ms-auto  gap-5">
        <li class="nav-item home">
          <a class="nav-link home-2" href="#" data-bs-dismiss="collapse">Home</a>
          <span className='line'></span>
        </li>
        <li class="nav-item word-size">
          <a class="nav-link home" href="#" data-bs-dismiss="collapse">About</a>
        </li>
        <li class="nav-item word-size">
          <a class="nav-link home" href="#" data-bs-dismiss="collapse">Services</a>
        </li>
        <li class="nav-item word-size">
          <a class="nav-link home" href="#" data-bs-dismiss="collapse">Contact</a>
        </li>
  
        <li class="nav-item border border-2 rounded-pill radius ms-5 ps-2">
          <a class="nav-link  px-4 home home-3" href="#" data-bs-dismiss="collapse">Login/Register</a>
        </li>
      </ul>
    </div> 
  </nav>
</div>





<div className="main swiper-container ">
<Slider {...settings}>
        <div className="swiper-slide">
          <div className="container-fluid py-5">
            <p className="text-white text-center px-5 size">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate voluptates?
              <br /> Obcaecati mollitia perferendis harum quaerat voluptatibus iusto.
            </p>
            <img src={Hospic_main} alt="" className="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="container-fluid py-5">
            <p className="text-white text-center px-5 size">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cupiditate voluptates?
              <br /> Obcaecati mollitia perferendis harum quaerat voluptatibus iusto.
            </p>
            <img src={Hospic_main} alt="" className="img-fluid mx-auto d-block" />
            
          </div>
        </div>
        </Slider>
        
        
    </div>
 
    </section>
   
    </>
  )
}

export default Header