import React from "react";


function register(){
    return (
        <div>
            <h1>Registration Page </h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="Email" className="form-control" />
            <br />
            <input type="text" placeholder="Username" className="form-control" />
            <br />
            <input type="password" placeholder="Password" className="form-control" />
            <br />
            <input type="password" placeholder="Confirm Password" className="form-control" />
            <br />
            <button className="btn btn-primary" >Register </button> 
            
            <button className="btn btn-primary" >Login Page</button>
            </div>
        </div>
    )
}
export default register