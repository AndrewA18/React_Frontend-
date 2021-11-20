import { Box, } from "@chakra-ui/react";

import React from 'react';

function ReviewCard(review) {

  const handleUpVote = () => {
    console.log("Up")
  }
  const handleDownVote = () => {
    console.log("Down")
  }

  return(
    <Box p="4" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          alignItems
        >
          {review.text} 
        </Box>
      </Box>
<<<<<<< Updated upstream
=======
      <Flex>
          <Button onClick={handleUpVote}>{String.fromCharCode(unfilledUpArrow)}</Button>
          <Spacer />
          <Button onClick={handleDownVote}>{String.fromCharCode(unfilledDownArrow)}</Button>
      </Flex>
>>>>>>> Stashed changes
    </Box>
  )
}


export default ReviewCard;
