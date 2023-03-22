import React,{ useEffect, useState } from "react";
import './../styles.css';

function PopularGiftNow(){
    const[data, update] = useState([]);

    const fetchData = () => {
        fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json")
        .then((response) => response.json())
        .then((data) => {
            update(data)
            console.log(data);
       
            
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return(
        <section>
      <div class="top-of-popular">
        <h2>Popular gifts right now</h2>
      </div>
      <div class="popular-gift-cards">
        <div class="input-area">
        <input class="toget-input" type="number" size="10"/>

        <button class="input-button">click</button>
        <button class="clear-button">clear</button>
      </div>
        <div class="single-card">
        {
         data.map((item) => (
      <div class="full-card"><div class="image-container">
      <img src={item.imgURL}/>
      {/* <div class="heart-btn"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>
      </div> */}
      </div>
      <li class="bottom-container total-pricelist">
  
      <h2>{item.caption}</h2>
      {/* <div class="rating"> */}
     {/* <div>{item.rating.amountOfRating}</div><span><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg></span></div> */}
      <div class="all-prices">
      <span>₹ {item.amount.payPrice} </span>
      <span>₹ {item.amount.originalPrice}</span>
      <span>({item.amount.discount}% off)</span>
      <span class="no-delivery">no-delivery</span>
      </div> 
      </li>
      </div>
       ))}
      </div>
      </div>
    </section>

       
    )

}


export default PopularGiftNow