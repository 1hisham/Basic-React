import Header from "./LaptopComponents/Header"
import LaptopCarousel from "./LaptopComponents/LaptopCarousel"
import Navitems from "./LaptopComponents/Navitems"




function LaptopItem(){
    return(
        <div className="laptop">
            <Header />
            <Navitems />
            <LaptopCarousel />
        </div>
    )
}

export default LaptopItem