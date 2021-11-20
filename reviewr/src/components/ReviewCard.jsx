import { Box, Button, Flex, Spacer} from "@chakra-ui/react";

import React, {useState} from 'react';

const unfilledUpArrow = 9651;
const unfilledDownArrow = 9661;
const unfilledStar = 9734;
const filledStar = 9733;

function ReviewCard(review) {

  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

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
          <Button color={upvoted ? "blue" : "red"} onClick={() => setUpvoted(!upvoted)}>{String.fromCharCode(unfilledUpArrow)}</Button>
          <Spacer />
          <Button>{String.fromCharCode(unfilledDownArrow)}</Button>
      </Flex>
    </Box>
  )
}


export default ReviewCard;
