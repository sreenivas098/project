import React from 'react';
import './Login.css';
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import {BASE_URL} from "./shared/BaseUrl"
export default function Login(props){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [success, setS] = React.useState(false)
    const history = useHistory()
    const onSubmit = async (event) =>{
        event.preventDefault();
        const res = await axios.post(`${BASE_URL}/login`, {email, password});

        if(res.data.token){
            localStorage.setItem("token", JSON.stringify(res.data.token));
            history.push("/home");
        }
        else setS(true)

    }
    return(
        <div className="fluid-container" style={{background:'gray', width:'100%', height:'100vh'}}>
            <div className="card row" style={{padding:'50px',background:'lightgray',boxShadow:'10px 10px 10px lightgray',width:'30rem', position:'absolute', top:'15%', left:'35%', trnasform:'translateX(-15%, -35%)', border:'3px solid gray', borderRadius:'10px'}}>



                <div className="card-body">
                    <h3 className="text-center">SIGNIN</h3>
                    <div className="Card-body" >
                        <form>

                            <div className="form-group">
                                <label for="email" className="py-1">Email</label>
                                <input id="email" type="email" name="email" onChange={(event)=>setEmail(event.target.value)} className="form-control" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label for="password" className="py-1">Password</label>
                                <input id="password" type="password" name="password" onChange={(event)=>setPassword(event.target.value)} className="form-control" autoComplete="off"/>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-secondary mt-3 " onClick={onSubmit}>SignIn</button>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer">
                        Don't have an Account <Link to="/signup">SignUp</Link> Here
                    </div>
                    {success && <div className="alert alert-danger" role="alert">
                        Check Credentials
                    </div>}
                </div>
            </div>

        </div>

    )
}
