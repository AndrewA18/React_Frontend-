import React, { useState } from 'react';
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
import Cookies from 'js-cookie';
import { grabProfile } from '../services/profileGrabber.js'



function Profile() {

    async function getUserInfo() {
        try {
            var data = await grabProfile();
        } catch (err) {
            console.error(err)
            throw err;
        }
        console.log('WORKED', data);
        return data;
    }

    var userInfo = getUserInfo();
    userInfo.then(User => { console.log('Username: ', User.username) });
    var testVar = 'TEST!';

    const editProf = () => {
        document.location.assign("/editprofile")
    }

    const deleteToken = () => {
        Cookies.remove('token')
    }

    return (
        <ChakraProvider>
            <Button colorScheme="teal" variant="solid" onClick={() => { deleteToken(); document.location.assign("/"); }}> Logout </Button>
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
                                <HStack spacing='24px'>
                                    <Text >Username: {userInfo.username} </Text>

                                    <Editable
                                        defaultValue='username'
                                        value={userInfo.username}
                                    >
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </HStack>

                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text>First Name: </Text>
                                    <Editable
                                        defaultValue='firstname'
                                        value={testVar}
                                    >
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </HStack>
                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text>Last Name: </Text>
                                    <Editable
                                        defaultValue='lastname'
                                        value={testVar}
                                    >
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </HStack>
                                <Divider orientation="horizontal" />
                                <HStack spacing='24px'>
                                    <Text>Email: {testVar} </Text>

                                    <Editable
                                        defaultValue='email'
                                        value={testVar}
                                    >
                                        <EditablePreview />
                                        <EditableInput />
                                    </Editable>
                                </HStack>
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
    );
}

export default Profile;