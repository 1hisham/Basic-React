
import './NavCard.css'
import arrow from './../LaptopSvg/arrowNav.svg'
function NavCard(props){
    // console.log(props);
    const {
        items
    } = props
 

        //   console.log(items);
          
    return(
        <div className="total-nav-cards">
        {items?.map((item)=> {
            return <div className="cards">
            <div className="item-image"><img src={item.imglink}/></div>
            <div className="item-des">{item.itemdetails}
            {item.list !== "" ? <img src={arrow}/>: <div></div>}
            </div>
            
             </div>
        })}          
       
        </div>
    )
    

}

export default NavCard