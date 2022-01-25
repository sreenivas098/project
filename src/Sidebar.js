import React from 'react';
import Content from "./components/Content"
import {useHistory} from "react-router-dom";
export default function Sidebar(props){
    const [page, setPage] = React.useState("");
    const history = useHistory();
    return(
        <>
            <div class="sidebar">
                  <p onClick={()=>setPage("Profile")}>Profile</p>
                  <p onClick={()=>setPage("Register")}>Register</p>
                  <p onClick={()=>{
                          setPage("/home")
                          localStorage.clear();
                          history.push("/");
                      }}>Logout</p>
            </div>
            <Content pageName={page}/>


        </>
    );
}
