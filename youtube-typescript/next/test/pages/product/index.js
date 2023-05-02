import Link from "next/link"
function ProductList({id = 200}){
    return (
        <>
        <Link href='/product/1'><h2>Product 1</h2></Link>
        <Link href='/product/2' replace><h2>Product 2</h2></Link>
        <Link href='/product/3'><h2>Product 3</h2></Link>
        <Link href={`/product/${id}`}><h2>Product {`${id}`}</h2></Link>
       
        <Link href='/'>
            <div>Home</div>
        </Link>
        </>
    )
}
export default ProductList