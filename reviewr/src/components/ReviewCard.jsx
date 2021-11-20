import { Box, Button, Flex, Spacer} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import React, {useState} from 'react';

const unfilledUpArrow = 9651;
const unfilledDownArrow = 9661;
const filledStar = 9733;

function ReviewCard(review) {

  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => 
  {
    hasUserUpvoted();
    setUpvoted(true);
    setDownvoted(false);
  }

  const handleDownvote = () => 
  {
    hasUserDownvoted();
    setUpvoted(false);
    setDownvoted(true);
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
      const responseValues = response.json().then((value) => setUpvoted(value === 'True'))
      return responseValues
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
      const responseValues = response.json().then((value) => setDownvoted(value === 'True'))
      return responseValues
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
          <Button backgroundColor={upvoted ? "green" : "gray"} onClick={() => handleUpvote()}>{String.fromCharCode(unfilledUpArrow)}</Button>
          <Spacer />
          <Button backgroundColor={downvoted ? "red" : "gray"} onClick={() => handleDownvote()}>{String.fromCharCode(unfilledDownArrow)}</Button>
      </Flex>
    </Box>
  )
}


export default ReviewCard;
