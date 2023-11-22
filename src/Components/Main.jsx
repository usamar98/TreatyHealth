import React from 'react'
import './Main.css'
import chat from '../assets/chat.png'
import medication from '../assets/medication.png'
import Schedule from '../assets/Schedule.png'
import Compliance from '../assets/Compliance.png'
import TrackVisit from '../assets/Track-Visit.png'

const Main = () => {
  return (
    <>
      <div class="container-fluid ">
      <div class="row d-flex justify-content-evenly padding ">
      
<div className="col-lg-2  ">
<div className="container text-center mt-4">
      <div className=" border rounded-circle p-5" >
        <img src={chat} alt=""   className="img-fluid " />
      </div>
      <span>Messaging</span>
      <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    </div>

    <div className="col-lg-2 ">
    <div className="container text-center mt-4">
      <div className=" border rounded-circle  p-5">
        <img src={Schedule} alt="Image" className="img-fluid" />
      </div>
      <span>Medication</span>
      <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi autem ex magnam praesentium unde, </p>
    </div>
    </div>

    <div className="col-lg-2 ">
    <div className="container text-center mt-4">
      <div className=" border rounded-circle  p-5">
        <img src={medication} alt="Image" className="img-fluid" />
      </div>
      <span>Schdule</span>
      <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi autem ex magnam praesentium unde, maiores labore ab corrupti</p>
    </div>
    </div>

    <div className="col-lg-2 ">
    <div className="container text-center mt-4">
      <div className=" border rounded-circle  p-5">
        <img src={Compliance} alt="Image" className="img-fluid" />
      </div>
      <span>Complance</span>
      <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi autem ex magnam praesentium unde, maiores </p>
    </div>
    </div>

    <div className="col-lg-2 ">
    <div className="container text-center mt-4">
      <div className=" border rounded-circle  p-5">
        <img src={TrackVisit} alt="Image" className="img-fluid" />
      </div>
      <span>Track Visit</span>
      <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi autem ex magnam praesentium unde, maiores labore ab </p>
    </div>
    </div>
   
        </div>
        
      </div>
      <div className='py-5'>
        <hr/>
      </div>
    </>
  )
}

export default Main