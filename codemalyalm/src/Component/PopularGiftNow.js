import React,{ useEffect, useState } from "react";
import './../styles.css';

const svgHalfRating = <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path className="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>;
let svgFullRating = <svg  xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>;





function PopularGiftNow(){
    const[data, update] = useState([]);

    const fetchData = () => {
        fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json")
        .then((response) => response.json())
        .then((data) => {
            calculationDiscount(data)
           
            
            
            update(data)
            console.log(data);
       
            
        })
    }

    function StarRatingAmount(props) {
   
        console.log(props);
      let svg = [];
      for (let i = 1; i <= props.item.rating.stars; i++) {
        svg.push(svgFullRating)
        
      }
      if (props % 1 !== 0) {
        svg.push(svgHalfRating)
        return svg;
      }
      return svg;
   
    }




    useEffect(() => {
        fetchData();
    }, [])
    
    function calculationDiscount(products) {

        let discountPrice = 0;
        let price = 0;
        let priceArray = [];
        products.forEach((item) => {
          discountPrice = item.amount.originalPrice * (item.amount.discount / 100);
          price = Math.floor(item.amount.originalPrice - discountPrice);
          item.amount.payPrice = price;
          priceArray.push(Math.floor(price));
        });
        return price;
      }
     
   

    return(
        <section>
      <div className="top-of-popular">
        <h2>Popular gifts right now</h2>
      </div>
      <div className="popular-gift-cards">
        <div className="input-area">
        <input className="toget-input" type="number" size="10"/>

        <button className="input-button">click</button>
        <button className="clear-button">clear</button>
      </div>
        <div className="single-card">
        {
         data.map((item) => (
      <div className="full-card"><div className="image-container">
      <img src={item.imgURL}/>
      
    
      {/* <StarRatingAmount /> */}
      {/* <div className="heart-btn"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>
      </div> */}
      </div>
      <li className="bottom-container total-pricelist">
  
      <h2>{item.caption}</h2>
      <div className="rating">
     <div>{item.rating.amountOfRating}</div><span><StarRatingAmount item={item}/></span></div>
      <div className="all-prices">
      <span>₹ {item.amount.payPrice} </span>
      <span>₹ {item.amount.originalPrice}</span>
      <span>({item.amount.discount}% off)</span>
      <span className="no-delivery">no-delivery</span>
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