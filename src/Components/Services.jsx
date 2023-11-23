import React from 'react'
import './Services.css'
import sliceing from '../assets/sliceing.png'
import  bars from '../assets/bars.png'
const Services = () => {
  return (
   <>
   <section className='services'>
    <div class="container-fluid ">
    <div className="row">
         <div className="col-xxl-6 col-xl-6 col-lg-12">
           <img src={sliceing} alt="" className='img-fluid'/>
         </div>
         <div className="col-xxl-6 col-xl-6 col-lg-12 font">
            <div className='pt-5'>
              <span className='Amazingservices'>Our Amazing Services</span>
              <p className='Enagage'>Enagage the Families You Serve</p>
           <img src={bars} alt="" />
             
            </div>
            <div className='pt-3'>
              <span className='text'>Eliminate handwriting Medication List</span>
              <p className='paragrapgh-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur dicta accusantium asperiores, eligendi, suscipit aperiam facilis beatae vel adipisci quibusdam tempora deleniti odit, quia sed soluta? Inventore, nisi hic!</p>
            </div>
            <div>
              <span className='text line-height'>Empower the Families You Serve</span>
              <p className='paragrapgh-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi labore ea saepe, ipsam atque! Laudantium aut veniam minus odio natus fuga, sunt necessitatibus molestias, eum, placeat omnis culpa molestiae?</p>
            </div>
            <div>
              <span className='text line-height'>Access To Important Document</span>
              <p className='paragrapgh-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio maxime ratione sint aliquam sequi repellat, animi totam ea voluptate laboriosam aliquid voluptas molestiae eius! Molestiae repellendus blanditiis beatae! Dicta.</p>
            </div>
            <div>
              <span className='text line-height'>Keep Other Family Members in the loop</span>
              <p className='paragrapgh-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio maxime ratione sint aliquam sequi repellat, animi totam ea voluptate laboriosam aliquid voluptas molestiae eius! Molestiae repellendus blanditiis beatae! Dicta.</p>
            </div>


          </div>
          <div>

          </div>
    </div>
      <div>
        <hr />
      </div>
    </div>
   
   </section>
   </>
  )
}

export default Services