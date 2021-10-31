import React,{useState,useEffect} from 'react';

function Home() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('/yelp/businesses/08028/'
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
  }
  useEffect(()=>{
    getData()
  },[])


  
  return (
    <div className="Home">
    <p>
      <strong>Reviews</strong>
    </p> 
     {
       data && data.length>0 && data.map((item)=><p>{item.name} : {item.review_count}</p>)
     }
    </div>
  );
}

export default Home;