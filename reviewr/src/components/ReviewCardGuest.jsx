import { Box, Button, Flex, Spacer, Heading} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import React, {useEffect, useState} from 'react';

const unfilledUpArrow = 9650;
const unfilledDownArrow = 9660;
const filledStar = 9733;

function ReviewCardGuest(review) {

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
          </Flex>
          <br/>
          {review.props.text} 
          <br/>
          <br/>
        </Box>
      </Box>
    </Box>
  )
}


export default ReviewCardGuest;
