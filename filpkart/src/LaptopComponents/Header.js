import Navlogo from "./Navlogo"
import './Header.css'
import Searchpanel from "./Searchpanel"
import Loginbtn from "./Loginbtn"
import Becomeseller from "./BecomeSeller"
import MoreHeader from "./MoreHeader"
import CartHeader from "./CartHeader"


 function Header(){
    
    return(
        <div className="full-header-laptop">
        <div className="total-header-laptop">
            <Navlogo />
            <Searchpanel />        
            <Loginbtn />
            <Becomeseller />
            <MoreHeader />
            <CartHeader />
        </div>
        </div>
    )
 }

 export default Header