import React from 'react'
import './Form.css'
import bars from '../assets/bars.png'
import Phone from '../assets/Phone.png'
import Pointer from '../assets/Pointer.png'
import Envelope from '../assets/Envelope.png'
const Form = () => {
  return (
   <>
   <section className='Form '>
   <div className="container-fluid">
    <div className="row p-5">
        <div className="col-md-5">
            <div>
            <span className='txt'>Stay In touch</span>
            </div>
            <div>
                <span className='contact'>Contact Us</span>
                
            </div>
            <img src={bars} alt="" className='img'/>
            <div className='py-4'>
               <img src={Phone} alt="" className='imgg'/> <span className='adress ms-5 '>+123456789</span>
            </div>
            <div className='py-4'>
            <img src={Pointer} alt="" className='imgg'/>  <span className='adress ms-5 '>Email@email.com</span>
            </div>
            <div className='py-4'>
            <img src={Envelope} alt="" className='imgg' />  <span className='adress ms-5'>1234AddressUsa</span>
            </div>
            <div className="social">

            </div>
           

        </div>
        <div className="col-md-7 shadow p-5">
        <div className=" mt-5 ">
      <form>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-3 ">
              <input type="text" className="form-control custom-input" id="input1"  placeholder="NAME*" />
            </div>
            <div className="mb-3">

              <input type="text" className="form-control custom-input" id="input2" placeholder="EMAIL*" />
            </div>
            <div className="mb-3">

              <input type="text" className="form-control custom-input1" id="input3" placeholder="SUBJECT*" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <textarea className="form-control" id="message" rows="9" placeholder="MESSAGE*"></textarea>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end ">
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