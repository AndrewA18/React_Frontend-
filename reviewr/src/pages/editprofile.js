import {
    ChakraProvider,
    Flex,
    VStack,
    Box,
    Center,
    Heading,
    Input,
    Spacer,
    Text,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Image
} from '@chakra-ui/react';
import React, { useState } from 'react';

function EditProfile() {
    const [email, setEmail] = useState([]);
    const [username, setUsername] = useState([]);
    const [zip, setZip] = useState([]);


    async function editprofile() {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('zip', zip)
        fetch("/api/editprofile/", {
            method: 'POST',
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formData
        })
            .then(result => {
                if (!result.ok) {
                    throw new Error("Failed to create account");
                }
                else {
                    result.text().then(value => document.cookie = ("token=" + JSON.parse(value)['token']) + "; max-age=86400; SameSite=Strict;"); //86400 is one day in time.
                    document.location.assign("/");
                }
            })
            .catch(error => console.log(error));
    }

    const saveProf = () => {
        //needs to save any changes to the backend
        document.location.assign("/profile")
    }
    const newPic = () => {
        //need to add way to add a picture here
    }

    return (
        <ChakraProvider>
            <Flex justifyContent="left">
                <VStack spacing={4} align="stretch">
                    <Box width="400px">
                        <Center>
                            <Heading mb={6} size="4xl" isTruncated>Edit Profile</Heading>
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
                                <Button colorScheme="teal" variat="ghost" onClick={newPic}>
                                    Upload Profile Picture
                                </Button>
                                <Divider orientation="horizontal" />
                                <Text>Username: username</Text>
                                <Divider orientation="horizontal" />
                                <Text>Email: example@example.com</Text>
                                <Divider orientation="horizontal" />
                                <Text>Zip Code: 00000</Text>
                                <Divider orientation="horizontal" />
                                <ButtonGroup>
                                    <Button colorScheme="teal" variant="solid" onClick={saveProf}>
                                        Save Changes
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                        </Center>
                    </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
        /*<div>
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
        </div>*/
    )
}

export default EditProfile;