import React from 'react'
import Register from "./Register"
import Profile from "./Profile"
const Content = ({pageName}) => {
    return (

            <div className="content">
                {
                    pageName === "Register"?
                        <Register />: <Profile />
                }
            </div>


    )
}

export default Content
