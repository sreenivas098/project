import React from 'react'
import {useHistory, Link} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../shared/BaseUrl"
const Signup = (props) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [phnumber, setPhnumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [cpassword, setCpassword] = React.useState("");
    const history = useHistory()
    const onSubmit = async (event) =>{
        event.preventDefault();
        if(cpassword !== password){ alert("password musth match")
        }
        else{

            const res = await axios.post(`${BASE_URL}/signup`, {email, name, password, phnumber});
            if(res.data.token){
                alert("You have Succesfully Registered")
                localStorage.setItem("token", JSON.stringify(res.data.token))
                history.push("/login");
            }
            else{ alert("Check You have already have an account")}


        }
    }
    return (
        <div className="fluid-container" style={{background:'gray', width:'100%', height:'100vh'}}>
            <div className="card row" style={{background:'lightgray',boxShadow:'10px 10px 10px lightgray',width:'30rem', position:'absolute', top:'15%', left:'35%', trnasform:'translateX(-15%, -35%)', border:'3px solid gray', borderRadius:'10px'}}>
                <div className="card-body">
                    <h3 className="text-center">SIGNUP</h3>
                    <div className="Card-body">
                        <form>
                            <div className="form-group">
                                <label for="fname" className="py-1">Full Name</label>
                                <input id="fname" type="text" name="fname" onChange={(e)=>setName(e.target.value)} className="form-control" autoComplete="off"  />
                            </div>
                            <div className="form-group">
                                <label for="email" className="py-1">Email</label>
                                <input id="email" type="gmail" name="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label for="password" className="py-1">Password</label>
                                <input id="password" type="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" autoComplete="off"/>
                            </div>
                            <div className="form-group">
                                <label for="cpassword" className="py-1">Confirm Password</label>
                                <input id="cpassword" type="password" name="cpassword" onChange={(e)=>setCpassword(e.target.value)} className="form-control" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label for="number" className="py-1">Phone No.</label>
                                <input id="number" type="text" name="number" onChange={(e)=>setPhnumber(e.target.value)} className="form-control" autoComplete="off" minLength="10" maxLength="10" />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-secondary mt-2" onClick={onSubmit}>SignUp</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        Already have an Account <Link to="/login">SignIn</Link> Here
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
