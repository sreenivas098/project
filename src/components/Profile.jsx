import React from 'react'
import jwt_decode from "jwt-decode";
import axios from "axios";
const Profile = (props) => {
    const data = jwt_decode(JSON.parse(localStorage.getItem("token")))
    const username = data.email.split("@")[0]
    const [myProfile, setProfile] = React.useState("");
    const [load, setLoad] = React.useState(false);
    React.useEffect(()=>{
        const getProfileData = () => {
            axios.get(`https://event-management-8495a-default-rtdb.firebaseio.com/users/${username}.json`)
            .then(doc => {setProfile(doc.data);
            setLoad(true)})
            .catch(e => console.log(e))
        }
        getProfileData();
    }, []);

    return (
        <div className="container">


                        <center><img src="/assets/logo.png"  width="300"/></center>
                        {
                            load  && <>
                            <h1>WELCOME { myProfile.name.toUpperCase()}</h1>
                            <div className="row text-center">
                                <center><table className="table" style={{width:'30rem'}}>
                                    <tbody>
                                        <tr>
                                            <td><b>Emaill</b></td>
                                            <td>{myProfile.email}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Phone Number</b></td>
                                            <td>{myProfile.phnumner}</td>
                                        </tr>
                                    </tbody>

                                </table>
                                </center>
                            </div>
                            </>
                        }








        </div>
    )
}

export default Profile
