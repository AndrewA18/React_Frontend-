import React,{ useState, useEffect } from 'react';
import {
    ChakraProvider,
    Flex,
    Center,
    Heading,
    Box,
    VStack,
    Text,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Image,
    Editable,
    EditableInput,
    EditablePreview,
    HStack
} from "@chakra-ui/react"
import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons'
import Cookies from 'js-cookie';
import { grabProfile } from '../services/profileGrabber.js'


function Profile(){
    
    const [username,setUsername]=useState([]);
    const [email,setEmail]=useState([]);
    const [firstname,setFirstname]=useState([]);
    const [lastname,setLastname]=useState([]);
    const [reputation,setReputation]=useState([]);

    useEffect(() => {
        grabProfile().then(data => setUsername(data.username));
        grabProfile().then(data => setEmail(data.email));
        grabProfile().then(data => setFirstname(data.first_name));
        grabProfile().then(data => setLastname(data.last_name));
        grabProfile().then(data => setReputation(data.reputation));
    }, []);

    const deleteToken = () => {
        Cookies.remove('token')
    }
    
    async function callUpdateUsernameApi()
    {
        let data = JSON.stringify({        
        "username": username
        })
        console.log(data['username'])
        const response = await fetch("/api/users/update/username/", {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + Cookies.get("token"),
                "Accept": "application/json"
            },
            body: data
        })
        const responseValues = response.json();
        return responseValues;
    }

     async function updateUsername()
    {
        callUpdateUsernameApi().then(responseValues => {
            window.location.reload();
        })
    }

    async function callUpdateFirstnameApi()
    {
        let data = JSON.stringify({        
        "first_name": firstname
        })
        console.log(data['first_name'])
        const response = await fetch("/api/users/update/firstname/", {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + Cookies.get("token"),
                "Accept": "application/json"
            },
            body: data
        })
        const responseValues = response.json();
        return responseValues;
    }

     async function updateFirstname()
    {
        callUpdateFirstnameApi().then(responseValues => {
            window.location.reload();
        })
    }

    async function callUpdateLastnameApi()
    {
        let data = JSON.stringify({        
        "last_name": lastname
        })
        console.log(data['last_name'])
        const response = await fetch("/api/users/update/lastname/", {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + Cookies.get("token"),
                "Accept": "application/json"
            },
            body: data
        })
        const responseValues = response.json();
        return responseValues;
    }

     async function updateLastname()
    {
        callUpdateLastnameApi().then(responseValues => {
            window.location.reload();
        })
    }

    async function callUpdateEmailApi()
    {
        let data = JSON.stringify({        
        "email": email
        })
        console.log(data['email'])
        const response = await fetch("/api/users/update/email/", {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + Cookies.get("token"),
                "Accept": "application/json"
            },
            body: data
        })
        const responseValues = response.json();
        return responseValues;
    }

     async function updateEmail()
    {
        callUpdateEmailApi().then(responseValues => {
            window.location.reload();
        })
    }
    
    const renderFirstnameValue = () =>{
        if(firstname)
        {
            return <Editable
                        onChange={newFirstname => setFirstname(newFirstname)}
                        onSubmit={() => {updateFirstname()}}
                        placeholder = {firstname}
                        
                    >
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
        }else{
                return <Editable
                            onChange={newFirstname => setFirstname(newFirstname)}
                            onSubmit={() => {updateFirstname()}}
                            defaultValue="Enter your first name here"
                            
                        >
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
        }
    }

    const renderLastnameValue = () =>{
        if(lastname)
        {
            return <Editable
                        onChange={newLastname => setLastname(newLastname)}
                        onSubmit={() => {updateLastname()}}
                        placeholder = {lastname}
                        
                    >
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
        }else{
                return <Editable
                            onChange={newLastname => setLastname(newLastname)}
                            onSubmit={() => {updateLastname()}}
                            defaultValue="Enter your last name here"
                            
                        >
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
        }
    }
 
    return (
        <ChakraProvider>


            <Box background="gray.300" px={4} width="100%" height="70px"> 
                <HStack spacing={335}>
                    <Flex p="4">
                        <ButtonGroup>
                        <Button colorScheme="teal" variant="ghost" leftIcon={< ArrowBackIcon/>} onClick={() => {document.location.assign("/"); }}> Back to home </Button>
                        </ButtonGroup>
                    </Flex>
                    <Flex >
                        <Heading color='teal' >  ReviewR </Heading>
                        <Heading color='gray.300' > ''''''</Heading>
                    </Flex>
                    <Flex p="4">
                        <ButtonGroup>
                        <Button width="83px" colorScheme="teal" variant="solid" onClick={() => { deleteToken(); document.location.assign("/"); }}> Logout </Button>
                        </ButtonGroup>
                    </Flex>
                </HStack>
            </Box>
            
               
            <Flex justifyContent="center">
                <VStack spacing={4} align="stretch">
                    <Box width="400px">
                        <Center>
                            <Heading mb={4} size="4xl" isTruncated>Profile</Heading>
                        </Center>
                    </Box>
                    <Box width="400px">
                        <Center>
                            <Stack>
                                <Image
                                    borderRadius="full"
                                    boxSize="350px"
                                    src="https://memegenerator.net/img/images/16730303/awkward-old-man-smile.jpg"
                                    alt="hide the pain harold"
                                    fallbackSrc="https://via.placeholder.com/150"
                                />
                                <Text align='center'> <StarIcon w={3} h={3} /> {reputation}</Text>
                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text >Username:</Text>

                                    <Editable
                                        onChange={newUsername => setUsername(newUsername)}
                                        onSubmit={() => {updateUsername()}}
                                        placeholder = {username}
                                    >
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </HStack>
                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text>First Name:</Text>
                                    <Editable>
                                        {renderFirstnameValue()}
                                    </Editable>
                                </HStack>
                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text>Last Name:</Text>
                                    <Editable>
                                        {renderLastnameValue()}
                                    </Editable>
                                </HStack>
                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text>Email:</Text>

                                    <Editable
                                        onChange={newEmail => setEmail(newEmail)}
                                        onSubmit={() => {updateEmail()}}
                                        placeholder= {email}
                                    >
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </HStack>
                                <Divider orientation="horizontal" />
                                

                            </Stack>
                        </Center>
                    </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
    );
}

export default Profile;