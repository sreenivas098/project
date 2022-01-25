import React from 'react'
import {Link} from "react-router-dom"
const HomePage = (props) => {
    const images = ["1.jpeg","2.jpeg","6.jpeg","7.jpeg","8.jpeg","1.jpeg"];
    return (
        <div className="fluid-container">
            <div className="d-flex flex-wrap">
            {
                images.map(index => <img src={`./assets/${index}`} alt="images 1" width="420" height="250" style={{margin:'15px'}} className="flex-shrink-1 rounded" />)
            }
            </div>

            <div className="float-end me-4">
                <Link to="/event" ><button className="btn btn-success">Next</button></Link>
            </div>
        </div>
    )
}
export default HomePage;
