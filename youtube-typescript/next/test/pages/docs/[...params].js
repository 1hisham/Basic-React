import { useRouter } from "next/router"

function Doc(){
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params,"this is params");
    if(params.length === 2){
        return(
            <h1>
                Viewing docs for feature {params[0]} and concepts {params[1]}
            </h1>
        )
    }else  {
        return <h1>Viewing docs for feature {params[0]}</h1>
    }
    
    return <h1>Docs Home Page</h1>
}
export default Doc