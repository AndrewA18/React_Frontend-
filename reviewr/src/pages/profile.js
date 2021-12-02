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
import Cookies from 'js-cookie';
import {grabProfile} from '../services/profileGrabber.js'



function Profile(){

    async function getUserInfo() {
        try{
            var data = await grabProfile();
        } catch (err) {
            console.error(err)
            throw err;
        }
        console.log('WORKED', data);
        return data;
    } 
    
    var userInfo = getUserInfo();
    userInfo.then(User =>{console.log('Username: ', User.username)});
    var testVar = 'TEST!';

    const editProf = () =>{
        document.location.assign("/editprofile")
    }

    const deleteToken = () =>{
        Cookies.remove('token')
    }


    return (
        <ChakraProvider>
            <Button colorScheme="teal" variant="solid" onClick={() => {deleteToken(); document.location.assign("/");}}> Logout </Button>
            <Flex justifyContent="center">
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
                                <Text >Username: {userInfo.username} </Text>
                                <Divider orientation="horizontal" />
                                <Text>Email: {testVar} </Text>
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