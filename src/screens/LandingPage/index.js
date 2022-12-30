import React from "react";
import Slider from "../../components/slider";
import Intro from "./Intro";
// import WhyFixer from "./WhyFixer";
// import Features from "./Features";
// import MoreFeatures from "./MoreFeatures";
// import FAQ from "./FAQ";
// import Testimonials from "./Testimonials";
// import OurBlog from "./OurBlog";
import Footer from "./Footer";
import Services from "./Services";


function Index() {
  return (
    <div className="flex flex-col justify-center self-stretch dark:bg-black">
       <Intro />
      <Slider/>
      <Services/>
     
      {/* <WhyFixer />
      <Features />
      <MoreFeatures />
      <FAQ />
      <Testimonials />
      <OurBlog /> */}
      <Footer />
      <div className="p-10">&nbsp;</div>
    </div>
  )
}

export default Index;