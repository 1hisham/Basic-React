import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [carouseldata, setData] = useState([]);
  let [count, setCount] = useState(0)
  

  let fetchdata = () => {
    fetch("/data.json")
      .then((respose) => respose.json())
      .then((data) => {
        setData(data.movingitem);
      });
  };
  // console.log(carouseldata.length);


  // setInterval(() => {
  //   if(count == 5){
  //     count = 0
  //     clearInterval(count)
  //   }
  //   setCount(++count)
  // }, 2000);
  // console.log(count);

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
             0% { transform: translateX(-${count - 1}00%); }
             100% { transform: translateX(-${count}00%); }
        }
    `}</style>
        <div className="carousel">
          {carouseldata?.map((items, index) => {
            // console.log(items);

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
