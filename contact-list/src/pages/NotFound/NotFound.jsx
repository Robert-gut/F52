import { Link } from "react-router-dom";

export default function NotFound(){
  return(
    <>
      <h1>NotFound 404</h1>
      <Link to='/'><button>Go home</button></Link>
    </>
  )
}