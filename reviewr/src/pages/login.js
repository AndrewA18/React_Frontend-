import React from "react";


function login(){
    return (
        <div>
            <h1>Login Page </h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="Email" className="form-control" />
            <br />
            <input type="password" placeholder="Password" className="form-control" />
            <br />
            <button className="btn btn-primary" > Login   </button>
            <button className="btn btn-primary" > Register</button>
            </div>
        </div>
    )
}
export default login