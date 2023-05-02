import Link from 'next/link'
import { useRouter } from 'next/router';
function Home(){
  const router = useRouter()
    const handleClick = () => {
        console.log("Placing the order");
        router.push('/product')
        
    }
    return (
    <>
    <h1>Home Page</h1>
    <Link href='/blog'>
        <div>Blog</div>
    </Link>
    <Link href='/product'>
        <div>Product</div>
    </Link>
    <button onClick={handleClick}>PlaceOrder</button>
    </>
    )
}
export default Home