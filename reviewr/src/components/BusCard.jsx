import { Box, Image, Button} from "@chakra-ui/react";
import React from 'react';
import getReviews from '../pages/home'

function BusCard(item) {

  return(
    <Box p="4" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
      <Image src={item.image_url} alt={item.alias} />
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
          {/* <Button p="4" colorScheme="teal" variant="solid" onClick={getReviews}>
            See Reviews
          </Button> */}
        </Box>
      </Box>
    </Box>
  )
}


export default BusCard;
