import './MoreHeader.css'
import arrow from './../LaptopSvg/arrowHeader.svg'

function MoreHeader(){
    return(
        <div className='total-more-header'>
            <span>More</span>
            <img src={arrow} />
        </div>
    )
}
export default MoreHeader