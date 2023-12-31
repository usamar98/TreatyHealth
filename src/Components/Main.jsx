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
      <div class="container-fluid main2 ">
      <div class="row d-flex justify-content-evenly  ">
      
<div className="col-xxl-2 col-lg-6  ">
<div className="container flex text-center mt-4">
      <div className=" bord  p-5">
        <img src={chat} alt=""   className="img-fluid img" />
      </div>
      <span className='heading'>Messaging</span>
      <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    </div>

    <div className="col-xxl-2 col-lg-6">
    <div className="container flex text-center mt-4">
      <div className=" bord  p-5">
        <img src={Schedule} alt="Image" className="img-fluid img" />
      </div>
      <span className='heading'>Medication</span>
      <p className="mt-3 color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi autem ex magnam praesentium unde, </p>
    </div>
    </div>

    <div className="col-xxl-2 col-lg-6">
    <div className="container flex text-center mt-4">
      <div className=" bord  p-5">
        <img src={medication} alt="Image" className="img-fluid img" />
      </div>
      <span className='heading'>Schdule</span>
      <p className="mt-3 color">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    </div>

    <div className="col-xxl-2 col-lg-6">
    <div className="container flex text-center mt-4">
      <div className=" bord  p-5">
        <img src={Compliance} alt="Image" className="img-fluid img" />
      </div>
      <span className='heading'>Complance</span>
      <p className="mt-3 color">Lorem ipsum dolor, sit amet consectetur commodi autem ex magnam praesentium unde, maiores </p>
    </div>
    </div>

    <div className="col-xxl-2 col-lg-12">
    <div className="container flex text-center mt-4">
      <div className=" bord  p-5">
        <img src={TrackVisit} alt="Image" className="img-fluid img" />
      </div>
      <span className='heading'>Track Visit</span>
      <p className="mt-3 color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa commodi autem ex magnam praesentium unde </p>
    </div>
    </div>
   
        </div>
        
      </div>
      
    </>
  )
}

export default Main