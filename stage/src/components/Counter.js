
import React,{useState, useEffect} from "react";
import Paint from "./Paint";




function Counter(){
    let [count , setCount ] = useState(0)
    let [dis, setDis] =useState("")
    
    function Foo(){
        console.log("hello");
        return(count * 3)
        
    }
    useEffect(() => {
        if (count){

            Clickhandler()
        }
    
    },[count])

  let Clickhandler = () =>{
    if(dis == ""){
        setDis(<Paint />)
    }else{
        setDis("")
    }
    }
 
    return(
        <>
        <button className="increment" onClick={()=> {setCount(count + 1)}}>INCREMENT</button>
        <button className="decrement" onClick={()=> {setCount(count - 1)}}>DECREMETN</button>
        <button className="reset" onClick={() => setCount(0)}>RESET</button>
        <div>{count}</div>
        <div><Foo /></div>
        <div className="btn" onClick={Clickhandler}>{dis}sdfhskljdf</div>
        </>
    )


}
export default Counter