import gift from './../LaptopSvg/gift.svg'
import order from './../LaptopSvg/order.svg'
import plus from './../LaptopSvg/plus.svg'
import profile from './../LaptopSvg/profile.svg'
import reward from './../LaptopSvg/reward.svg'
import wishlist from './../LaptopSvg/wishlist.svg'
import './HeaderDropdown.css'

function HeaderDropdown(){
    return(
        <div className="total-dropdown">
            <ul>
                <li><img src={profile}/><span>My Profile</span></li>
                <li><img src={plus}/><span>Flipkart Plus Zone</span></li>
                <li><img src={order}/><span>Order</span></li>
                <li><img src={wishlist}/><span>Wishlist</span></li>
                <li><img src={reward}/><span>Rewards</span></li>
                <li><img src={gift}/><span>Gift Cards</span></li>
            </ul>
        </div>
    )
}
export default HeaderDropdown