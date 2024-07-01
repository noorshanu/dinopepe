import React from 'react'
import Accordion from './Accordion'

function Faq() {
  return (
   <section>
    <div className=' container-wrapper'>
        <div className=' bg-[#224609] border-4 border-white rounded-3xl p-4'>

            <h1 className=' text-3xl sm:text-7xl font-dream font-bold text-center'>FAQ $DINOPEPE</h1>

            <div className=' flex justify-around items-center flex-col sm:flex-row'>

              <div className=' border-4 rounded-3xl box-s2 border-white p-4'>

                

              </div>

            </div>

            <Accordion/>

        </div>

    </div>
   </section>
  )
}

export default Faq