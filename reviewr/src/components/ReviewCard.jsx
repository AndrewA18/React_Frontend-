import { Box, } from "@chakra-ui/react";

import React from 'react';

function ReviewCard(item) {

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
          {item.name} 
          <br />
          {item.review_count} Reviews
        </Box>
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="5"
          >
            {item.location.display_address}
            <br />
            {item.phone}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default BusCard;
