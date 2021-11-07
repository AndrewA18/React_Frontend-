import { Box, } from "@chakra-ui/react";

import React from 'react';

function ReviewCard(review) {

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
    </Box>
  )
}


export default ReviewCard;
