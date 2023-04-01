import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [carouseldata, setData] = useState([]);
  

  let fetchdata = () => {
    fetch("/data.json")
      .then((respose) => respose.json())
      .then((data) => {
        setData(data);
      });
  };
  console.log(carouseldata);


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
          {carouseldata.movingitem?.map((items, index) => {
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
