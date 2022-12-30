import React  from "react";
// import { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import '../App.css'
// import useMediaQuery from "../useMediaQuery";

function Slider(){
    const images = [
        "/slider_imgs/slide-img.png",
        "/slider_imgs/slide-img2.png",
        "/slider_imgs/slide-img3.png"
    ]
    // const matches = useMediaQuery('(max-width: 600px)')
        return(
            
            <Slide>
                {images.map((image,index)=>{
                    return(
                    <div className="h-96 sm:h-full" key={index}>
               
                        <div className="flex-1 bg-cover" style={{ 
                                'backgroundImage': `url(${process.env.PUBLIC_URL+image})`,
                                        'height': "600px" 
                                        }}>
                    
                        </div>  
                    </div>
                    )
                })
                }

            </Slide>
        )
}

export default Slider