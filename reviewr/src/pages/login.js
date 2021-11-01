import React, { useState } from "react";


function Login(){
    const [email, setEmail]= useState([]);
    const [password, setPassword]= useState([]);

    async function login()
    {
        var formData = new FormData();
        formData.append('username', email); //Users will login with emails. so the username field is an email...
        formData.append('password', password);
        fetch("/api/login/", 
        {
            method: 'POST',
            header:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formData
        })
        .then(result => 
            {
                if(!result.ok)
                {
                    throw new Error("Failed to login");
                }
                else
                {
                    result.text().then(value => document.cookie = ("token=" + JSON.parse(value)['token']) + "; max-age=86400; SameSite=Strict;"); //86400 is one day in time.
                    document.location.assign("/");
                }
            })
        .catch(error => console.log(error));
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
            <button onClick={login} className="btn btn-primary" > Login   </button>
            <button className="btn btn-primary" > Register</button>
            </div>
        </div>
    )
}
export default Login