import React,{ useState } from 'react';

function EditProfile(){
    const [email, setEmail]=useState([]);
    const [username, setUsername]=useState([]);
    const [zip, setZip]=useState([]);
    

    async function editprofile()
    {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('zip', zip)
        fetch("/api/editprofile/", {
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
                    throw new Error("Failed to create account");
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
            <h1>Edit Profile Page </h1>
            <div className="col-sm-6 offset-sm-3">
            <label>Email: </label>
            <input type="text" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>

            <br />
            <label>Username: </label>
            <input type="text" placeholder="Username" className="form-control" onChange={(e)=>setUsername(e.target.value)}/>

            <br />
            <label> Zip Code: </label>

            <br />

            <br />
            
            <button className="btn btn-primary" >Save Changes</button>
            </div>
        </div>
    )
}

export default EditProfile;