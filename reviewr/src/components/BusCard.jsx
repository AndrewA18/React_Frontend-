import { Box, Image, Button} from "@chakra-ui/react";
import React from 'react';

function BusCard(item, currentBusiness) {
  function setBusiness() {
    console.log("Setting Business")
    currentBusiness.name = item.name
    currentBusiness.id = item.id
  }

  return(
    <Box p="4" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"  onClick={setBusiness}>
      <Image src={item.image_url} alt={item.alias} size="sm" />
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
          <Button p="4" colorScheme="teal" variant="solid">
            See Reviews
          </Button>
        </Box>
      </Box>
    </Box>
  )
}


export default BusCard;
