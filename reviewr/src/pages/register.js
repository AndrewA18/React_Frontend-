import React, { useState } from "react";
import { Flex, Heading, Input, Button, ChakraProvider, InputGroup, InputRightElement } from "@chakra-ui/react"

function Register(){
    const [email, setEmail]=useState([]);
    const [username, setUsername]=useState([]);
    const [password, setPassword]=useState([]);
    const [passwordConfirm, setPasswordConfirm]=useState([]);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    async function register()
    {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('passwordConfirm', passwordConfirm);
        fetch("/api/register/", {
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
    <ChakraProvider>
        <Flex height=" 75vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.900" p={12} rounded={6}>
                <Heading mb={6}>Create an account</Heading>
                <Input width="300px" placeholder="Email" variant="filled" p={6} mb={3} type="email" onChange={(e)=>setEmail(e.target.value)}></Input>
                <Input width="300px" placeholder="Username" variant="filled" p={6} mb={3} type="email" onChange={(e)=>setUsername(e.target.value)}></Input>
                <InputGroup>
                    <Input width="300px" placeholder="Password" variant="filled"p={6} mb={3} type={show ? "text" : "password"} onChange={(e)=>setPassword(e.target.value)}></Input>
                    <InputRightElement width="4.5rem">
                            <Button h="2rem" size="sm" p={4} onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                </InputGroup>
                <Input width="300px" placeholder="Confirm Password" variant="filled"p={6} mb={3} type={show ? "text" : "password"} onChange={(e)=>setPasswordConfirm(e.target.value)}></Input>
                <Button onClick={register} colorScheme="teal" rounded={6}>Create</Button>
                <Button onClick={() => {document.location.assign("/login")}} colorScheme="teal" variant="ghost" rounded={6}>Already have an account? Sign in.</Button>
            </Flex>
        </Flex>
        </ChakraProvider>
    )
}
export default Register