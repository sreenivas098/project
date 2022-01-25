import React from 'react';
import './Login.css';
export default function Registration(props){
    return(
        <>
        <div>
            <form className="register">
                <h1>Register Here</h1>
                <label>Name<br />
                <input type="text" placeholder="Name" /></label>
                <label>Email<br />
                <input type="email" placeholder="Email" /></label>
                <label>Groom Name<br />
                <input type="text" placeholder="Groom" /></label>
                <label>Bride Name<br />
                <input type="text" placeholder="Bride" /></label>
                <label>Address<br />
                <input type="text" placeholder="Address" /></label>
                <label>Mobile<br />
                <input type="varchar" placeholder="Mobile" /></label>
                <label aria-label="left">Marriage Type</label>
                <select className="select">
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Others">Others</option>
                </select>
                <label>Event Location<br />
                <input type="text" placeholder="Event Location" /></label>
                <div>
                <button type="submit">Submit</button>
                <button type="submit">Reset</button>
                </div>
            </form>
        </div>
        </>
    )
    
}
