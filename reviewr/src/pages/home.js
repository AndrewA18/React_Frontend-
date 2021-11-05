import React,{useState,useEffect} from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react"


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
    <div className="Home">
      <FormControl id="location">
        <FormLabel>Location</FormLabel>
          <Input type="location" onChange={event => { setLocation(event.target.value)}} />
      </FormControl>
      <Button colorScheme="teal" variant="solid" onClick={callYelp}>
        Search
      </Button>
    <p>
      <strong>Reviews</strong>
    </p> 
     {
       data && data.length>0 && data.map((item)=><p>{item.name} : {item.review_count}</p>)
     }
    </div>
  );
}

// return (
//   <Box className='Home'>
//      {data.length>0 && data.map(item =>
//           <Box item sm={4} key={item.id}>
//             <Card item={item}/>
//           </Box>)
//         }
//     </Box>
// );
// }

export default Home;