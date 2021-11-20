import { Box, Button, Flex, Spacer, Heading} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import React, {useEffect, useState} from 'react';

const unfilledUpArrow = 9650;
const unfilledDownArrow = 9660;
const filledStar = 9733;

function ReviewCard(review) {

  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  //This is run once when component is mounted.
  useEffect(() =>
  {
    hasUserUpvoted();
    hasUserDownvoted();
    getUpvotes();
    getDownvotes();
  }, [])

  const handleUpvote = () => 
  {
    upvoteReview().then(hasUserUpvoted());
  }

  const handleDownvote = () => 
  {
    downvoteReview().then(hasUserDownvoted());
  }

  async function hasUserUpvoted()
  {
      const response = await fetch("/api/reviews/has_user_upvoted/" + review.props.id, 
      {
          method: 'GET',
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + Cookies.get("token"),
          }
      })
      const userupvoted = response.json().then((value) => setUpvoted(value === 'True'))
  }

  async function hasUserDownvoted()
  {
      const response = await fetch("/api/reviews/has_user_downvoted/" + review.props.id, 
      {
          method: 'GET',
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + Cookies.get("token"),
          }
      })
      const userdownvoted = response.json().then((value) => setDownvoted(value === 'True'))
      return userdownvoted
  }

  async function upvoteReview()
  {
    const response = await fetch("/api/reviews/upvote/", 
    {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + Cookies.get("token"),
        },
        body: JSON.stringify({
          "yelp_review_id": review.props.id
        })
    })

    setUpvoted(!upvoted);
    setDownvoted(false);
    getUpvotes();
    getDownvotes();
  }

  async function downvoteReview()
  {
    const response = await fetch("/api/reviews/downvote/", 
    {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + Cookies.get("token"),
        },
        body: JSON.stringify({
          "yelp_review_id": review.props.id
        })
    })

    setDownvoted(!downvoted);
    setUpvoted(false);
    getDownvotes();
    getUpvotes();
  }

  async function getUpvotes()
  {
      const response = await fetch("/api/reviews/get_upvotes/" + review.props.id, 
      {
          method: 'GET',
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + Cookies.get("token"),
          }
      })
      const userupvoted = response.json().then((value) => setUpvotes(value))
  }

  async function getDownvotes()
  {
      const response = await fetch("/api/reviews/get_downvotes/" + review.props.id, 
      {
          method: 'GET',
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + Cookies.get("token"),
          }
      })
      console.log(response)
      const userdownvoted = response.json().then((value) => setDownvotes(value))
  }

  return(
    <Box p="4" mt={2} maxW="sm" borderWidth="1px" borderRadius="lg">
      <Box p="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          alignItems
        >
          <Flex>
          {review.props.user.name}
          <Spacer/>
          {String.fromCharCode(filledStar).repeat(review.props.rating)}
          </Flex>
          <br/>
          {review.props.text} 
          <br/>
          <br/>
        </Box>
      </Box>
      <Flex>
          <Button backgroundColor={upvoted ? "green" : "gray"} 
                  onClick={() => handleUpvote()}>
                  {String.fromCharCode(unfilledUpArrow)}
          </Button>
          <Spacer />
          <Heading size="sm" color={upvotes === 0 ? "gray" : "green"}> {upvotes === 0 ? "" : "+"}{upvotes}</Heading>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Heading size="sm" color={downvotes === 0 ? "gray" : "red"}> {downvotes === 0 ? "" : "-"}{downvotes}</Heading>
          <Spacer />
          <Button backgroundColor={downvoted ? "red" : "gray"} 
                  onClick={() => handleDownvote()}>
                  {String.fromCharCode(unfilledDownArrow)}
          </Button>
      </Flex>
    </Box>
  )
}


export default ReviewCard;
