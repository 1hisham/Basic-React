import React, { useEffect, useState } from "react";
import "./../styles.css";
import HeartSvg from "./HeartSvg";




const svgHalfRating = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3 3 18 18"
    aria-hidden="true"
    focusable="false"
  >
    <path
      className="foreground"
      d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"
    ></path>
  </svg>
);
let svgFullRating = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3 3 18 18"
    aria-hidden="true"
    focusable="false"
    width="18"
    height="18"
  >
    <path
      d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"
      fill="#222222"
    ></path>
  </svg>
);



function PopularGiftNow() {
  const [data, update] = useState([]);
  

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json"
    )
      .then((response) => response.json())
      .then((data) => {
        calculationDiscount(data);

        update(data);
        console.log(data);
      });
  };

  function StarRatingAmount(props) {
    let svg = [];
    for (let i = 1; i <= props.item.rating.stars; i++) {
      svg.push(svgFullRating);
    }
    if (props % 1 !== 0) {
      svg.push(svgHalfRating);
      return svg;
    }
    return svg;
  }



  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <section>
      <div className="top-of-popular">
        <h2>Popular gifts right now</h2>
      </div>
      <div className="popular-gift-cards">
        <div className="input-area">
          <input className="toget-input" type="number" size="10" />

          <button className="input-button">click</button>
          <button className="clear-button">clear</button>
        </div>
        <div className="single-card">
          {data.map((item, indx) => (
            <div className="full-card" >
              <div className="image-container">
                <img src={item.imgURL} />
            <HeartSvg />
             
              </div>
              <li className="bottom-container total-pricelist">
                <h2>{item.caption}</h2>
                <div className="rating">
                  <div>{item.rating.amountOfRating}</div>
                  <span>
                    <StarRatingAmount item={item} />
                  </span>
                </div>
                <div className="all-prices" style={{ textAlign: "initial" }}>
                  <span>₹ {item.amount.payPrice} </span>
                  <span>₹ {item.amount.originalPrice}</span>
                  <span>({item.amount.discount}% off)</span>
                  {item.freeDelivery == "" ? (
                    <span className="no-delivery">no-delivery</span>
                  ) : (
                    <span className="FREE delivery">FREE delivery</span>
                  )}
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularGiftNow;
