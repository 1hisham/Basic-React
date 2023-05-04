function ArticleListByCategory({artices, category}){

    return(
        <>
            <h1>
                Showing news category <i>{category}</i>
            </h1>
            {
                artices.map(artice => {
                    return(
                        <div key={artice.id}>
                            <h2>
                                {artice.id} {artice.title}
                            </h2>
                            <p>{artice.description}</p>
                        
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context){
    const { params } = context
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()
    return {
        props:{
            artices:data,
            category,
        },
    }
}
