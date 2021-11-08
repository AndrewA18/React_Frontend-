import React,{useState} from 'react';
import {
  FormControl,
  Input,
  Button,
  ChakraProvider,
  Flex
} from "@chakra-ui/react"
import BusCard from '../components/BusCard'
import Cookies from 'js-cookie';

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

  const deleteToken = () =>{
    Cookies.remove('token')
    window.location.reload(); //refreshes the window
  }

  const renderAuthButton = () =>{
    if(Cookies.get('token')!= null)
    {
      return <Button colorScheme="teal" variant="solid" onClick={() => deleteToken()}> Logout </Button>
    }
    else
    {
      return <Button colorScheme="teal" variant="solid" onClick={() => {document.location.assign("/login")}}>Login</Button>
    }
  }

  //{renderAuthButton()} is login/logout button
  return (
    <ChakraProvider>
      {renderAuthButton()} 
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