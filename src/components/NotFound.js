import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <div className='not-found'>
            <h3>We are sorry, the page you are searching for does not exist!</h3>
            <Link to='/'>Go to Homepage</Link>
        </div>
    )
}