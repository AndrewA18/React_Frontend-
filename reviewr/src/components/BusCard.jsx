import { AspectRatio, Box, Image, Button} from "@chakra-ui/react";
import React, {useState} from 'react';

let currentBusiness = "";

export function getCurrentSelectedBusiness()
{
  return currentBusiness;
}

function BusCard(item) 
{ 
  const [selected, setSelected] = useState(false);

  function setBusiness(business) 
  {
    currentBusiness = business;
    setSelected(!selected)
  }

  return(
    <Button ml={10} mt={3} variant="outline" width="350px" height="250px" onClick={() => setBusiness(item.props)}>
    <Box maxW="sm" flexGrow={1} borderRadius="lg" overflow="hidden">
      <AspectRatio maxH="140px">
        <Image src={item.props.image_url} alt={item.props.alias} size="sm" />
      </AspectRatio>
      <Box p="2">
        <Box
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          textAlign="left"
        >
          {item.props.name} 
          <br />
          {item.props.review_count} Reviews
        </Box>
        <Box mt={1}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            textAlign="left"
          >
            {item.props.location.address1} - {item.props.location.city}
            <br />
            {item.props.display_phone}
          </Box>
        </Box>
      </Box>
    </Box>
    </Button>
  )
}


export default BusCard;
