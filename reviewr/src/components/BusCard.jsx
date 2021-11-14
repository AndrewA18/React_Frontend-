import { AspectRatio, Box, Image} from "@chakra-ui/react";
import React, {useState} from 'react';

let currentBusiness = "";


export function getCurrentSelectedBusiness()
{
  return currentBusiness;
}

function BusCard(item) 
{
  function setBusiness() 
  {
    currentBusiness = item;
  }

  return(
    <Box p="4" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mt={6} onClick={setBusiness}>
      <AspectRatio maxH="100px">
        <Image src={item.image_url} alt={item.alias} size="sm" />
      </AspectRatio>
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
