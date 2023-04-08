import React, { useState, useEffect } from "react";
import './LaptopCarousel.css'
import arrowsvg from './../LaptopSvg/lapCarouselArrow.svg'

function LaptopCarousel() {
  const [carouseldata, setCarouseldata] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      try {
        const respose = await fetch("./lapdata.json");
        const json = await respose.json();
        setCarouseldata(json.carousel);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchdata();
  }, []);

  return <div>
    <div className="carousel-container-lap">
        <div className="single-container">
       {carouseldata?.map(item => {
            return  <div key={item.id}className="image-carousel-lap">
           <img src={item.img}/>
       </div>
       

       })}

        </div>
       <button className="left-arrow-lap"><img src={arrowsvg}/></button>
       <button className="right-arrow-lap"><img src={arrowsvg}/></button>
    </div>
  </div>;
}

export default LaptopCarousel;
