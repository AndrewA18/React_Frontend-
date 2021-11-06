import React,{useState,useEffect} from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
  Flex, Spacer
} from "@chakra-ui/react"
import BusCard from '../components/BusCard'


function Home() { 
  const [data,setData]=useState([]);
  
  const [location, setLocation] = useState('');

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
    
     {
       data && data.length>0 && data.map((item)=>BusCard(item))
     }
    </ChakraProvider>
  );
}

export default Home;