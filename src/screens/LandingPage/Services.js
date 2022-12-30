import React from "react";
import FreeToUse from '../../assets/images/FreeToUse-Icon.png';
import BookNow from '../../assets/images/BookNow-Icon.png';
import VettedFixers from '../../assets/images/VettedFixers-Icon.png';

function Services() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="sw flex justify-center">
        <div className="flex flex-col items-center">
          <p>TheDavidFilms</p>
          <h2 className="py-4">Our services</h2>
          <div className="flex flex-wrap py-6 gap-4 justify-center">

            {/* Cards */}
            
            <div className="card-sty1 min-w-[200px] sm:max-w-md rounded-md dark:bg-slate-500  ">
              <div className="py-2">
                <img src={FreeToUse} alt="Free to use" className='w-[40px]' />
              </div>
              <h4 className="dark:text-slate-200">Video Editing</h4>
              <p className="dark:text-slate-200">we provide services.we provide services.we provide services.we provide services.
                    we provide services.we provide services.</p>
            </div>

            <div className="card-sty1 min-w-[200px] sm:max-w-md rounded-md dark:bg-slate-500">
              <div className="py-2">
                <img src={BookNow} alt="book now" className='w-[40px]' />
              </div>
              <h4 className="dark:text-slate-200">Video Shooting</h4>
              <p className="dark:text-slate-200">we provide services.we provide services.we provide services.we provide services.
                    we provide services.we provide services.</p>
            </div>
            
            <div className="card-sty1 min-w-[200px] sm:max-w-md rounded-md dark:bg-slate-500">
              <div className="py-2">
                <img src={VettedFixers} alt="vetted fixers" className='w-[40px]' />
              </div>
              <h4 className="dark:text-slate-200">SFX</h4>
              <p className="dark:text-slate-200">
              we provide services.we provide services.we provide services.we provide services.
                    we provide services.we provide services.
              </p>
            </div>
            <div className="card-sty1 min-w-[200px] rounded-md sm:max-w-md dark:bg-slate-500">
              <div className="py-2">
                <img src={FreeToUse} alt="Free to use" className='w-[40px]' />
              </div>
              <h4 className="dark:text-slate-200">Streaming</h4>
              <p className="dark:text-slate-200">we provide services.we provide services.we provide services.we provide services.
                    we provide services.we provide services.</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;