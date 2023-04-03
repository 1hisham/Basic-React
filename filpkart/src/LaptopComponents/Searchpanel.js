import './Searchpanel.css'
import searchlogo from './../LaptopSvg/laptopsearch.svg'

function Searchpanel(){
    return(
        <div className='total-search-bar'>
            <a><button><img src={searchlogo}/></button><input className='search-input' type="text" placeholder='Search for products,brands and more'></input></a>
            
        </div>
    )
}

export default Searchpanel