import React from 'react'
import PropTypes from 'prop-types'

const About = (props) => {
    return (
        <div>
             <div style={{backgroundColor:"orange",backgroundSize:'100%',backgroundRepeat:'no-repeat', width:'100%', height:'100vh'}}>
           
                <div class="p-3 mb-2 bg-warning text-dark">
                    <h1 style={{color:"black"}}>About Us</h1>
                    <p>
                             Weddings can be jittery so finding a cheerful site for your wedding planning is a good move. WedMeGood can give you their “powerpuff” team of individuals who have “sugar, spice, and everything nice” for your wedding planning. They also have a collection of vendors to help you out in finding the best photographer to the grandest event planner. You can also feast your eyes on their gallery of real-life weddings where you can imagine your own day unfolding right before your eyes.
                    </p>
                </div>
                <div class="center">
                    <h2 style={{color:"black"}}>Our Team</h2>
                </div>
                    <div className="border-5">
                        <h3>M.Sreenivasulu</h3>
                        <p class="title">Developer</p>
                        <p>sreenivas@gmail.com</p>
                        <p>COntact Number:9398457821</p>
                    </div>
                    <div className='border=4'>
                        <h4>T.S Balagandhar Thilak</h4>
                        <p class="title">Developer</p>
                        <p>Thilak@gmail.com</p>
                        <p>Contact Number:12345678792</p>
                    </div>
            </div>

        </div>
       
    )
}

export default About
