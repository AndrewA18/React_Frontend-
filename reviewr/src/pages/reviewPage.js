import React from 'react';
import { Box, Image, Button} from "@chakra-ui/react";

const reviewPage = props => {
var BusinessID = props.match.params.id

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
        HELLO
        {BusinessID} 
      </Box>
    </Box>
  </Box>
    );
}
export default reviewPage;