import { Box, Image, } from "@chakra-ui/react";

import React from 'react';

function BusCard(item) {

  return(
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={item.image_url} alt={item.alias} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {item.name} &bull; {item.review_count} Reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default BusCard;
