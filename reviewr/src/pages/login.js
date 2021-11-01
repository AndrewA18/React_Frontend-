import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login(){
    const [email, setEmail]= useState([]);
    const [password, setPassword]= useState([]);

    let item = {email, password};

    async function loggin ()
    {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        let result = fetch("/api/login/", {
            method: 'POST',
            header:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formData
        });
        console.log(result);
        //history.push("/") trying to get it to route to the homepage after login
    }
    
    
    
    return (
        <div>
            <h1>Login Page </h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="Email" className="form-control"
                onChange={(e)=>setEmail(e.target.value)}/> 
            <br />
            <input type="password" placeholder="Password" className="form-control" 
                onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button onClick={loggin} className="btn btn-primary" > Login   </button>
            <button className="btn btn-primary" > Register</button>
            </div>
        </div>
    )
}
export default Login