
// import { useEffect } from "react"
import { FetchingApiTopNav } from "./FetchingApi";
import React,{ useEffect,useState } from "react";



function TopNav(){
   const [data, update] = useState([])

    const fetchData = () => {
        FetchingApiTopNav("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/categorylist.json")
        .then((data) => update(data))

        
    
    }
    useEffect(() => {
        fetchData();
        
        
    },[])
    return(
        <div>
            {data.map((item) => 
            <li>{item.name}<div>{item.svg}</div></li>)}
       
        </div>
        
    )    
}

export default TopNav



















   
            
//         })
//         return(
//             <div>
//                 <li>{total}</li>
//                </div>
        

//         )

   
// }

// export default TopNav
 
    
   
   
        






        
