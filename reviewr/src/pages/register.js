import React, { useState } from "react";


function Register(){
    const [email, setEmail]=useState([]);
    const [username, setUsername]=useState([]);
    const [password, setPassword]=useState([]);
    const [passwordConfirm, setPasswordConfirm]=useState([]);

    let item = {email, username, password, passwordConfirm};

    async function register()
    {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('passwordConfirm', passwordConfirm);
        let result = fetch("/api/register/", {
            method: 'POST',
            header:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formData
        });
        console.log(result);
    }

    return (
        <div>
            <h1>Registration Page </h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="text" placeholder="Username" className="form-control" onChange={(e)=>setUsername(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <input type="password" placeholder="Confirm Password" className="form-control"onChange={(e)=>setPasswordConfirm(e.target.value)}/>
            <br />
            <button onClick={register} className="btn btn-primary" >Register </button> 
            <button className="btn btn-primary" >Login Page</button>
            </div>
        </div>
    )
}
export default Register