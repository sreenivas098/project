import React from 'react';
import '../Home.css';
import {Link} from "react-router-dom";
export default function Navbar(props){
    const navLinks = ["signup", "login", "about"];
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-lignt bg-light">
                <div className="container-fluid ">
                    <a href="/" className="navbar-brand"><img src="./assets/logo.png" alt="logo of application"  style={{borderRadius:'50%'}} width="100" height="80" className="rounded px-2" /></a>
                    <h1 className="text-dark">
                        Event Management System
                    </h1>
                    <ul className="navbar-nav ml-auto">
                        {
                            navLinks.map((values, index) => <li className="nav-item" key={index}><Link className="nav-link h4 text-dark" to={`/${values}`}>{values}</Link></li>)
                        }
                        </ul>
                </div>
            </nav>
            <div class={"text-center"}>
                <div class="fs-10"> 
                    <div className="container-fluid">
                        <p class="fw-bold">We plan,design and style your celebrations from top to bottom.</p>
                        <p class="fw-bold">help with the finest of details and ensure you are over-the-moon with the outcome.</p>
                        <p class="fw-bold">Our passion,commitment and readiness to help is crystal clear throughout, </p>
                        <p class="fw-bold">the whole process and will ensure your special occassion is rather for you.There is nothing else we would rather do!.</p>   
                        <p class="fw-bold"> As a wedding planners,we share our time and love to explore the regions in between.</p>

                    </div>
                   
                    
    
                </div>
               
               
        
            </div>
        </>
    )
}
