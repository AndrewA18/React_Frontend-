import React,{useState,useEffect} from 'react';
import {
  FormControl,
  Input,
  Button,
  ChakraProvider,
  Flex, Box
} from "@chakra-ui/react"
import BusCard from '../components/BusCard'
import ReviewCard from '../components/ReviewCard'



function Home(props) { 
  const [data,setData]=useState([]);
  const [reviewData,setReviewData]=useState([]);
  const [location, setLocation] = useState('');

  const [businessID,setBusinessID]=useState(['qE-L1PQd8i6X_NSdysLGiA']);

  const callYelp = async => {

    console.log(location)

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

    const getReviews = async => {

    console.log(businessID)

      fetch('/yelp/reviews/' + businessID + '/'
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

    return reviewData
  }


  
  return (
    <ChakraProvider>
      <Flex p="4">
        <FormControl id="location">
            <Input type="location" onChange={event => { setLocation(event.target.value)}} />
        </FormControl>
        <Button colorScheme="teal" variant="solid" onClick={callYelp}>
          Search
        </Button>
      </Flex>

    <p>
      <strong>Businesses Near: {location}</strong>
    </p>
    <Flex p="4">
      <Box>
        {
            data && data.length>0 && data.map((item)=>BusCard(item))
        }
      </Box>
      <Box>
        <Button p="4" colorScheme="teal" variant="solid" onClick={getReviews}>
            See Reviews
        </Button>
        {reviewData && reviewData.length>0 && reviewData.map((review)=>ReviewCard(review))}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Home;