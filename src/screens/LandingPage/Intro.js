import React from "react";
import { Link } from "react-router-dom";
// import {ReactComponent as MobileViewImg} from '../../assets/images/mobile-view.svg';

function Intro() {
  return (
    <div>
    <div className="flex items-center justify-center w-full bg-[url('./assets/images/2.png')] sm:bg-none bg-fit text-white sm:text-black">
      <div className="sw flex flex-wrap items-center py-10">
        <div className="flex-1 flex flex-col p-4">
          <p className="text-white sm:text-gray-500">TheDavidFilms</p>

          {/* Big Header Content */}
          <h1 className="dark:text-white sm:bg-none">Your #1 multimedia  platfrom</h1>
          <p className="text-white sm:text-gray-500 py-10">
            You can find a product for your media services here.<br /> 
            We provide a variety of media services<br/><br/>
            <Link to='/' className='btn-sty2'>More</Link></p>
         
        </div>

        {/* SVG Mobile View Image */}
        <div className="flex-1 flex justify-center">
          {/* <MobileViewImg className="h-[500px] w-[300px] min-w-[300px]" /> */}
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col p-4">
    <p className="text-black text-center sm:text-gray-500 dark:text-white">You will find what you are looking for</p>

    <hr className="sw mt-2" />

    </div>
    

    </div>
  )
}

export default Intro;