import { Box, Button, Flex, Spacer} from "@chakra-ui/react";

import React from 'react';

const unfilledUpArrow = 9651;
const unfilledDownArrow = 9661;
const unfilledStar = 9734;
const filledStar = 9733;

function ReviewCard(review) {

  return(
    <Box p="4" maxW="sm" borderWidth="1px" borderRadius="lg" mt={6}>
      <Box p="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          alignItems
        >
          <Flex>
          {review.user.name}
          <Spacer/>
          {String.fromCharCode(filledStar).repeat(review.rating)}
          </Flex>
          <br/>
          {review.text} 
          <br/>
          <br/>
        </Box>
      </Box>
      <Flex>
          <Button>{String.fromCharCode(unfilledUpArrow)}</Button>
          <Spacer />
          <Button>{String.fromCharCode(unfilledDownArrow)}</Button>
      </Flex>
    </Box>
  )
}


export default ReviewCard;
