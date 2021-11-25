import React,{ useState } from 'react';
import {
    ChakraProvider,
    Flex,
    Center,
    Heading,
    Box,
    Input,
    Spacer,
    VStack,
    Text,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Image
} from "@chakra-ui/react"



function Profile(){
    const [email, setEmail]=useState([]);
    const [username, setUsername]=useState([]);
    const [zip, setZip]=useState([]);
    

    async function profile()
    {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('zip', zip)
        fetch("/api/profile/", {
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
    
    const editProf = () =>{
        document.location.assign("/editprofile")
    }


    return (
        <ChakraProvider>
            <Flex justifyContent="left">
                <VStack spacing={4} align="stretch">
                    <Box width="400px">
                        <Center>
                            <Heading mb={6} size="4xl" isTruncated>Profile</Heading>
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
                                <Divider orientation="horizontal" />
                                <Text>Username: username</Text>
                                <Divider orientation="horizontal" />
                                <Text>Email: example@example.com</Text>
                                <Divider orientation="horizontal" />
                                <Text>Zip Code: 00000</Text>
                                <Divider orientation="horizontal" />
                                <ButtonGroup>
                                    <Button colorScheme="teal" variant="solid" onClick={editProf}>
                                        Edit
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                        </Center>
                    </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
        /*<div>
            <h1>Profile Page </h1>
            <div className="col-sm-6 offset-sm-3">
            <label>Email: </label>
            <div address="example@example.com"></div>
            <br />
            <label>Username: </label>
            <input type="text" placeholder="Username" className="form-control" onChange={(e)=>setUsername(e.target.value)}/>

            <br />
            <label> Zip Code: </label>

            <br />

            <br />
            
            <button className="btn btn-primary" >Edit</button>
            </div>
        </div>*/
    );
}

export default Profile;