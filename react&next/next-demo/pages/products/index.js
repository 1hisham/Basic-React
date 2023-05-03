function productList({ products }){
    return(
        <>
        <h1>List of Products</h1>
        {products.map(product => {
            return(
                <div key={product.id}>
                    <h2>
                        {product.id}  {product.title}  {product.price}
                    </h2>
                </div>
            )
        })}
        </>
    )
}
export default productList

export async function getStaticProps(){
    console.log('genrating / Regenrating ProductList')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    return {
        props: {
          products:data
        },
        revalidate:10,
    }
}