import React from 'react'
import './Form.css'
import bars from '../assets/bars.png'
import Phone from '../assets/Phone.png'
import Pointer from '../assets/Pointer.png'
import Envelope from '../assets/Envelope.png'
import fb from '../assets/fb.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
const Form = () => {
  return (
   <>
   <section className='Form py-sm-2'>
   <div className="container-fluid">
    <div className="row p-md-5 p-sm-1 mx-auto">
      <div>
        
      </div>
        <div className="col-md-12 col-lg-12 col-xl-4  pad">
            <div>
            <span className='txt text-uppercase'>Stay In touch</span>
            </div>
            <div className=''>
                <span className='contact'>Contact Us</span>
                
            </div>
            <img src={bars} alt="" className='img '/>
            <div className='py-4'>
               <img src={Phone} alt="" className='imgg'/> <span className='adress ms-md-5 ms-sm-2'>+0123456789110</span>
            </div>
            <div className='py-4'>
            <img src={Pointer} alt="" className='imgg'/>  <span className='adress ms-md-5 ms-sm-2'>Email@email.com</span>
            </div>
            <div className='py-4'>
            <img src={Envelope} alt="" className='imgg' />  <span className='adress ms-md-5 ms-sm-2'>1234AddressUsa</span>
            </div>
            <div className="social mt-5 mb-xxl-0 mb-lg-5">
             <img src={fb} alt="" className='social-img' />
             <img src={instagram} alt="" className='social-img'/>
             <img src={twitter} alt="" className='social-img'/>
             <img src={youtube} alt="" className='social-img'/>


            </div>
           

        </div>
        <div className="col-md-12 col-lg-12 col-xl-8 shadow p-md-5 p-sm-1 mr-5">
        <div className=" mt-5 p-2">
      <form className=''>
        <div className="row">
      
          <div className="col-md-6">
            <div className="mb-4 border border-2 rounded">
              <input type="text" className="form-control custom-input" id="input1"  placeholder="NAME*" />
            </div>
            <div className="mb-4 border border-2 rounded">

              <input type="text" className="form-control custom-input" id="input2" placeholder="EMAIL*" />
            </div>
            <div className="mb-4 border border-2 rounded">

              <input type="text" className="form-control custom-input1" id="input3" placeholder="SUBJECT*" />
            </div>
          </div>

       
          <div className="col-md-6">
            <div className=" border border-2 rounded">
              <textarea className="form-control" id="message" rows="10" placeholder="MESSAGE*"></textarea>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end pt-md-3 py-3">
        <button type="submit" className="btn btn-primary button">Submit</button>
      </div>
      </form>
    </div>
        </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default Form