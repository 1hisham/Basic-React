import { useState } from 'react';
import { useEffect } from 'react';
import NavCard from './NavCard';
import './Navitems.css'


function Navitems(){
    const [itemdata, setData] = useState([])
    let fetchdata =()=> fetch('./lapdata.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
         setData(data.laptopNav)
        
    })
    useEffect(() => {
        fetchdata()
    },[])

    
    
    return(
        <div className='total-nav-container'>
        <NavCard items={itemdata}/>
        </div>
    )
}

export default Navitems 