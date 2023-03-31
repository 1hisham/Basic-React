import React, { useEffect, useState } from "react"
import './Carousel.css'



function Carousel(){
    const [carouseldata, setData] = useState([])

    let fetchdata = () => {
        fetch("data.json")
        .then(respose => respose.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    }

    useEffect(() => {
        fetchdata()
    },[])
    return (
       <div className="carousel">
            {carouseldata.movingItem?.map((item,index) => {

                <div className="carousel-image" key={index}><img src={item}/></div>            
            })}
        </div>


    )
}

export default Carousel