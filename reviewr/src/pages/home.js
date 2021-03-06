import React,{useState} from 'react';
import {
  FormControl,
  Input,
  Button,
  ChakraProvider,
  Center,
  Heading,
  Flex, 
  Box,
  VStack,
  HStack,
  ButtonGroup,
  Divider,
  Spacer,
  Menu,
  MenuButton,
  MenuItem, 
  MenuList
} from "@chakra-ui/react"

import BusCard, {getCurrentSelectedBusiness} from '../components/BusCard'
import ReviewCard from '../components/ReviewCard'
import ReviewCardGuest from '../components/ReviewCardGuest'
import Cookies from 'js-cookie';

function Home(props) { 
  const [data,setData]=useState([]);
  const [reviewData,setReviewData]=useState([]);
  const [location, setLocation] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');

  const callYelp = async => {

    if(location.length === 5)
    {
      setEnteredLocation(location);
      setData(null);
      setReviewData(null);
      console.log(location);
  
        fetch('/yelp/businesses/' + location + '/'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson['businesses'])
          });
      return data
    }
  }

    const getReviews = async => 
    {
      let selectedBusiness = getCurrentSelectedBusiness();
      setReviewData(null);

      fetch('/yelp/reviews/' + selectedBusiness.id + '/'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setReviewData(myJson['reviews'])
        });
    console.log(reviewData);
    return reviewData
  }

  const deleteToken = () =>{
    Cookies.remove('token')
    window.location.reload(); //refreshes the window
  }

  const renderAuthButton = () =>{
    if(Cookies.get('token')!= null)
    {
      return  <Menu>
      <MenuButton as={Button} width="83px" colorScheme='teal' variant="solid">
        <Center>
        Account
        </Center>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => {document.location.assign("/profile")}}>Profile </MenuItem>
        <MenuItem onClick={() => deleteToken()}>Logout</MenuItem>  
      </MenuList>
    </Menu>
    }
    else
    {
      return <Button width="83px" colorScheme="teal" variant="solid" onClick={() => {document.location.assign("/login")}}> Login </Button>
    }
  }

  //{renderAuthButton()} is login/logout button
  return (
    <ChakraProvider>
      <Flex justifyContent="center">
        <VStack spacing={4} align="stretch" > 
          <Box background="gray.300" px={4} width="100%" height="70px"> 
            <HStack spacing={323}>
              <Flex p="4">
                <ButtonGroup>
                {renderAuthButton()}
                </ButtonGroup>
              </Flex>
              <Flex >
                <Heading color='gray.300' >///....</Heading>
                <Heading color='teal' >  ReviewR </Heading>
              </Flex>
              <Flex p="4">
                <FormControl id="location">
                  <Input type="location" onChange={event => { setLocation(event.target.value); setEnteredLocation(null); setData(null); setReviewData(null)}} />
                </FormControl>
               <ButtonGroup>
                 <Button colorScheme="teal" variant="solid" onClick={callYelp}>
                 Search
                 </Button>
               </ButtonGroup>
              </Flex>
            </HStack>
          </Box>

          <Center>
            <Flex>
              <VStack spacing={4} align="stretch">
                <Box width="400px">
                  <Center>
                    <Heading mb={6} isTruncated>Restaurants</Heading>
                  </Center>
                </Box>
                <Box overflowY="auto" height="500px" width="450px" onClick={getReviews}>
                    {
                      data && data.map( business => <BusCard props={business}/> )
                    }
                </Box>
              </VStack>
              <Center height="600px" p={6}>
                <Divider orientation="vertical" />
              </Center>
              <VStack spacing={4} align="stretch" >
                <Box width="450px">
                  <Center>
                  <Heading mb={6}>Reviews</Heading>
                  </Center>
                </Box>
                <Box overflowY="auto" height="500px">
                  {
                    Cookies.get("token")!=null && reviewData && reviewData.length>0 && reviewData.map((review) => <ReviewCard props={review}/>)
                  }
                  {
                    Cookies.get("token")==null && reviewData && reviewData.length>0 && reviewData.map((review) => <ReviewCardGuest props={review}/>)
                  }
                </Box>
              </VStack>
            </Flex>
          </Center>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

/*
      <Box>
        <Button p="4" colorScheme="teal" variant="solid" onClick={getReviews}>
            See Reviews
        </Button>
          {reviewData && reviewData.length>0 && reviewData.map((review)=>ReviewCard(review))}
        </Box>
*/

export default Home;