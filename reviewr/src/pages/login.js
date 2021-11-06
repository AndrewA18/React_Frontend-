import React, { useState } from "react";
import { Flex, Heading, Input, Button, ChakraProvider, InputGroup, InputRightElement } from "@chakra-ui/react"
import Cookies from 'js-cookie';

function Login(){
    const [email, setEmail]= useState([]);
    const [password, setPassword]= useState([]);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [token, setToken] = useState([]);
    
    //This is how we get tokens...
    console.log(Cookies.get('token'))

    async function login()
    {
        var formData = new FormData();
        formData.append('username', email); //Users will login with emails. so the username field is an email...
        formData.append('password', password);
        console.log(email);
        await fetch("/api/login/", 
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
                    result.text().then(value => setToken(JSON.parse(value)['token'])); //86400 is one day in time.
                    console.log(token);
                    while(token.length < 1)
                    {
                        result.text().then(value => setToken(JSON.parse(value)['token'])); //86400 is one day in time.
                    }
                    document.cookie = "token=" + token + "; max-age=86400; SameSite=Strict;"
                    document.location.assign("/");
                }
            })
        .catch(error => console.log(error));
    }
    
    return (
        <ChakraProvider>
            <Flex height="75vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.900" p={12} rounded={6}>
                    <Heading mb={6}>Log in</Heading>
                    <Input width="300px" placeholder="Email" variant="filled" p={6} mb={3} type="email" onChange={(e)=>setEmail(e.target.value)}></Input>
                    <InputGroup>
                        <Input width="300px" placeholder="Password" type={show ? "text" : "password"} variant="filled" p={6} mb={3} onChange={(e)=>setPassword(e.target.value)}></Input>
                        <InputRightElement width="4.5rem">
                            <Button h="2rem" size="sm" p={4} onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button onClick={login} colorScheme="teal" rounded={6}>Log in</Button>
                    <Button onClick={() => {document.location.assign("/register")}} colorScheme="teal" variant="ghost" rounded={6}>No account? Create one here.</Button>

                </Flex>
            </Flex>
        </ChakraProvider>
    )
}
export default Login