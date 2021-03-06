import React, { useState } from "react";
import { Flex, Heading, Input, Button, ChakraProvider, InputGroup, InputRightElement } from "@chakra-ui/react"
import Cookies from 'js-cookie';

function Login(){
    const [email, setEmail]= useState([]);
    const [password, setPassword]= useState([]);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    //This is how we get tokens...
    console.log(Cookies.get('token'))

    async function callLoginApi()
    {
        let data = JSON.stringify({        
        "username": email,
        "password": password
        })
        console.log(data['username'])
        console.log(data['password'])
        const response = await fetch("/api/login/", 
        {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: data
        })
        const responseValues = response.json();
        return responseValues
    }

    async function login()
    {
        callLoginApi().then(responseValues => {
            if (responseValues['token'] !== undefined){
                document.cookie = ("token=" + responseValues['token'] + "; max-age=86400; SameSite=Strict;");
                document.location.assign("/");
            }
            else{
                alert("Username/Password Combination Inccorrect")
            }
        });
    }
    
    return (
        <ChakraProvider>
            <Flex height="75vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.300" p={12} rounded={6}>
                    <Heading mb={6}>Log in</Heading>
                    <Input width="300px" placeholder="Email" variant="filled" p={6} mb={3} type="email" onChange={(e)=>setEmail(e.target.value)}></Input>
                    <InputGroup>
                        <Input width="300px" placeholder="Password" type={show ? "text" : "password"} variant="filled" p={6} mb={3} onChange={(e)=>setPassword(e.target.value)}></Input>
                        <InputRightElement width="4.5rem" height="3.2rem">
                            <Button h="2rem" size="sm" p={4} onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button onClick={login} colorScheme="teal" rounded={6}>Log in</Button>
                    <Button onClick={() => {document.location.assign("/register")}} colorScheme="teal" variant="ghost" rounded={6}>No account? Create one here.</Button>
                    <Button onClick={() => {document.location.assign("/")}} colorScheme="teal" variant="ghost" rounded={6}>Home Page.</Button>

                </Flex>
            </Flex>
        </ChakraProvider>
    )
}
export default Login