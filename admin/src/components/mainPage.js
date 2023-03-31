import { useState,useEffect } from "react"

function Mainpage() {

    let fetchdata = () =>{fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/allDataOfEsty.json")
    .then(response => response.json())
    .then(data => {
       
        console.log('hello');
        
    })
    .catch(err => console.log(err))
}
    const [data, setData ] = useState(0)

    let clikhadler1 = ()=>{
       setData(data  + 1 ) 
       console.log('render forward');
       
    }

    let clikhadler2 = ()=>{
        setData(data  - 1 ) 
       console.log('render backward');
  

     }
   
     function helo(){
        console.log('hii');
        
     }
     
    function foo(){
        console.log('dfdsg');
        
    }
     
     useEffect(()=>{
        // fetchdata()
        console.log('hello');
        console.log(data);
        
        helo()
        return function(){
            console.log(data)
        }
     },[data])

    return ( 
        <div>
            <div onClick={clikhadler1}>forward               {data}</div>
            <div onClick={clikhadler2}>backward               {data}</div>
  
        
        </div>
    )
}
export default Mainpage