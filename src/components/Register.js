import React from 'react'
import jwt_decode from "jwt-decode"
import "./register.css"
import axios from "axios";
const Register = (props) => {
    // Groom Details
    const [gname, setGname] = React.useState("");
    const [gage, setGage] = React.useState(0);
    const [gphnumber, setGphnumber] = React.useState("");
    const [gqualification, setGq] = React.useState("");
    const [gfname, setGfname] = React.useState("");
    const [gmname, setGmname] = React.useState("");
    const [gcaste, setGcaste] = React.useState("");
    const [gaddress, setGaddress] = React.useState("");
    const [gextra, setGextra] = React.useState("");
    const [greligion, setGreligion] = React.useState("");
    // Bride Details
    const [bname, setBname] = React.useState("");
    const [bage, setBage] = React.useState(0);
    const [bphnumber, setBphnumber] = React.useState("");
    const [bqualification, setBq] = React.useState("");
    const [bfname, setBfname] = React.useState("");
    const [bmname, setBmname] = React.useState("");
    const [bcaste, setBcaste] = React.useState("");
    const [baddress, setBaddress] = React.useState("");
    const [bextra, setBextra] = React.useState("");
    const [breligion, setBreligion] = React.useState("");


    //Handle function
    const handleSubmit = e => {
        e.preventDefault();
        const data ={
            "groom_details":{
                name:gname,
                age:gage,
                phnumber : gphnumber,
                qualification: gqualification,
                fathernme: gfname,
                mothername:gmname,
                caste:gcaste,
                religion: greligion,
                address: gaddress,
                extra:gextra,
            },
            "bride_details":{
                name: bname,
                age:bage,
                phnumber : bphnumber,
                qualification: bqualification,
                fathernme: bfname,
                mothername:bmname,
                caste:bcaste,
                religion: breligion,
                address: baddress,
                extra:bextra
            }
        }
        const d = jwt_decode(JSON.parse(localStorage.getItem("token")))
        const username = d.email.split("@")[0]

        axios.post(`https://event-management-8495a-default-rtdb.firebaseio.com/event/${username}.json`, data)
        .then(doc => {
            console.log(doc.data)
            alert("registered Succesfully");
        }).catch(e=>console.log(e))

    }
    return (
        <div className="fluid-container">
            <div className="card row" >
                <div className="card-body">
                    <h3 className="text-center bg-secondary p-4">Register For Event</h3>
                    <div className="card-body">
                        <form className="row">
                            <div className="d-flex ">
                                <fieldset className="border p-2 col-md-6 border-3 border-dark" >
                                    <legend className="float-none w-auto p-2">Groom details</legend>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="name">Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" id="name" onChange={(e)=>setGname(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="age">Age</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={(e)=>setGage(e.target.value)} id="age" name="age" minLength="2" maxLength="2"/>
                                        </div>

                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="pnumber">Phone No.</label>
                                        <div className="col-md-9">
                                            <input type="number" minLength="10" maxLength="10" onChange={(e)=>setGphnumber(e.target.value)} className="form-control" id="pnumber" name="pnumber"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="qualification">Qualification</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={(e)=>setGq(e.target.value)} id="qualification" name="qualification"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="fname">Father Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={(e)=>setGfname(e.target.value)} id="fname" name="fname"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="mname">Mother Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={(e)=>setGmname(e.target.value)} id="mname" name="mname"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="caste">Caste</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={(e)=>setGcaste(e.target.value)} id="caste" name="caste"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="religion">Religion</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={(e)=>setGreligion(e.target.value)} id="religion" name="religion"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="address">Address</label>
                                        <div className="col-md-9">
                                            <textarea cols="30" rows="4" className="form-control" onChange={(e)=>setGaddress(e.target.value)} name="address" id="address" placeholder="D.no, StreetName, Village, Mandal/City, District, State, Country-pincode"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="extrainfo">Extra Information</label>

                                        <div className="col-md-9">
                                            <textarea cols="30" rows="4" onChange={(e)=>setGextra(e.target.value)} className="form-control" name="extrainfo" id="extrainfo" placeholder="Extra about yourself"></textarea>
                                        </div>

                                    </div>
                                </fieldset>
                                <fieldset className="ms-4 border p-2 col-md-6 border-3 border-dark">
                                    <legend className="float-none w-auto p-2">Bride details</legend>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="name">Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBname(e.target.value)} id="name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="age">Age</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBage(e.target.value)} id="age" name="age" minLength="2" maxLength="2"/>
                                        </div>

                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="pnumber">Phone No.</label>
                                        <div className="col-md-9">
                                            <input type="number" minLength="10" maxLength="10" onChange={e=>setBphnumber(e.target.value)} className="form-control" id="pnumber" name="pnumber"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="qualification">Qualification</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBq(e.target.value)} id="qualification" name="qualification"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-md-3" for="fname">Father Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBfname(e.target.value)} id="fname" name="fname"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="mname">Mother Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBmname(e.target.value)} id="mname" name="mname"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="caste">Caste</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBcaste(e.target.value)} id="caste" name="caste"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="religion">Religion</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" onChange={e=>setBreligion(e.target.value)} id="religion" name="religion"/>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="address">Address</label>
                                        <div className="col-md-9">
                                            <textarea cols="30" rows="4" onChange={e=>setBaddress(e.target.value)} className="form-control" name="address" id="address" placeholder="D.no, StreetName, Village, Mandal/City, District, State, Country-pincode"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-md-3" for="extrainfo">Extra Information</label>

                                        <div className="col-md-9">
                                            <textarea cols="30" rows="4" onChange={e=>setBextra(e.target.value)} className="form-control" name="extrainfo" id="extrainfo" placeholder="Extra about yourself"></textarea>
                                        </div>

                                    </div>
                                </fieldset>
                            </div>
                            <div className="row">
                                <button className="btn mt-4  btn-dark " onClick={handleSubmit}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                //style={{background:'lightgray',boxShadow:'10px 10px 10px lightgray',width:'30rem', position:'absolute', top:'15%', left:'35%', trnasform:'translateX(-15%, -35%)', border:'3px solid gray', borderRadius:'10px'}}
            }
        </div>
    )
}

export default Register
