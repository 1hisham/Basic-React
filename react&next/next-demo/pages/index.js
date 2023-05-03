import Link from "next/link"

function Home(){
  return(
    <>
    <h1>Next js pre-rendering</h1>
  <Link href="/users">
    <div>users</div>
  </Link>
  <Link href='/posts'>
    <div>posts</div>
  </Link>
    </>
  ) 

}
export default Home