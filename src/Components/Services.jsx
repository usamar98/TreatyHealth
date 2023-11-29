import React from 'react'
import './Services.css'
import sliceing from '../assets/sliceing.png'
import  bars from '../assets/bars.png'
const Services = () => {
  return (
   <>
   <div className='py-3'>
        <hr/>
      </div>
   <section className='services '>
    <div class="container-fluid ">
    <div className="row">
         <div className="col-xxl-6 col-lg-12 d-flex align-items-center">
           <img src={sliceing} alt="" className='img-fluid'/>
         </div>
         <div className="col-xxl-6  col-lg-12 px-lg-5 px-md-5 px-md-5 px-sm-5 align-self-center  font ">
            <div className='pt-5'>
              <span className='Amazingservices text-uppercase'>Our Amazing Services</span>
              <p className='Enagage'>Enagage the Families You Serve</p>
           <img src={bars} alt="" />
             
            </div>
            <div className='pt-3'>
              <span className='text  '>Eliminate handwriting Medication List</span>
              <p className='paragrapgh-text E-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur dicta accusantium asperiores, eligendi, </p>
            </div>
            <div>
              <span className='text line-height'>Empower the Families You Serve</span>
              <p className='paragrapgh-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi labore </p>
            </div>
            <div>
              <span className='text line-height'>Access To Important Document</span>
              <p className='paragrapgh-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio sit amet consectetur.</p>
            </div>
            <div>
              <span className='text line-height'>Keep Other Family Members in the loop</span>
              <p className='paragrapgh-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni magnam consequatur, adipisci dolore doloribus earum sit ab a soluta. Sequi eaque laborum libero doloremque voluptatem consequuntur expedita provident ex? </p>
            </div>


          </div>
          <div>

          </div>
    </div>
    
    </div>
   
   </section>
   <div className='py-3'>
        <hr/>
      </div>
   </>
  )
}

export default Services