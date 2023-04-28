import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/5/wp-json/genrenator/v1/genre/500")
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  console.log("data from api:", data);

  return (
    <div className="App">
      {/* {data?.map((item) => {
        console.log(item.films);
        return (
          <>
            <div>
              <img src={item.imageUrl} />
              <p>{item.name}</p>
            </div>
          </>
        );
      })} */}
    </div>
  );
}

export default App;
