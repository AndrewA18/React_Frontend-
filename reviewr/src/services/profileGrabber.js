import Cookies from 'js-cookie';

export async function grabProfile()
{
    const response = await fetch("/api/users/self", 
    {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Token " + Cookies.get("token"),
        },
    })
    const profile = response.json();
    return profile
}

//Call this with something like
//     grabProfile().then(whoAmI =>{console.log(whoAmI);})