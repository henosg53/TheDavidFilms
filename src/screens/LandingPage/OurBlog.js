import React, { useEffect, useState } from "react";
import BlogImg from '../../assets/images/2.png'
import Footer from "./Footer";


// Sample Data
const blogs = [
  {
    header: "Video Shooting event today",
    img: BlogImg,
    date: '29 dec 2022'
  },
  {
    header: "SFX platforms are dying",
    img: BlogImg,
    date: '10 dec 2022',
  },
  {
    header: "We are all dying",
    img: BlogImg,
    date: '29 dec 2022'
  },
  {
    header: "Coming soon, a new animation audio",
    img: BlogImg,
    date: '10 dec 2022',
  }
]

function OurBlog() {
  const [blogList,setBlogList] = useState([]);

  useEffect(() => {
    setBlogList(blogs)
  },[])

  return (
    <div className="w-full flex justify-center">
      <div className="sw flex flex-col items-center">
        <p className="uppercase">our blog</p>
        <h2 className="pb-10">Company Blog</h2>
        <div className="flex flex-wrap gap-3 w-full ">
          {
            // Listing Blog Object from variable
            blogList.map((blog,i) => (
              <div className="card-sty2 min-h-[300px] w-full  sm:w-[350px]" key={i}>
                <div className="img-cont ">
                  <img alt='User' className="text-[0]" src={blog.img || null} />
                </div>
                <div className="description">
                  <small>{blog.date}</small>
                  <h4>
                  {blog.header}
                  </h4>
                </div>
              </div>
            ))
          }
        </div>

        
        
        <Footer/> 
      </div>
      
    </div>
  )
}


export default OurBlog;