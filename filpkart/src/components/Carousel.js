import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [carouseldata, setData] = useState([]);
  // let [count, setCount] = useState(0)
  

  let fetchdata = () => {
    fetch("/data.json")
      .then((respose) => respose.json())
      .then((data) => {
        setData(data.movingitem);
      });
  };
  console.log(carouseldata.length);
  


  // let i=1; 
  // function Itteration(i){
  //     setTimeout(function(){
  //        output(i)
         
  //        if(i==10){
  //          i = 0
  //        }
  //       Itteration(i+1)
  //     }, 2000)
  // }
  // Itteration(i);
  
  // function output(i){
   
  //   setCount(i)
    
  // } 
  

 

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="full-carousel">
      <div className="total-carousel">
        <style>{`
        @keyframes slidein {
             0% { transform: translateX(0%); }
             100% { transform: translateX(-100%); }
        }
    `}</style>
        <div className="carousel">
          {carouseldata?.map((items, index) => {
            console.log(items);

            return (
              <div className="carousel-image" key={index}>
                <img src={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default Carousel;
