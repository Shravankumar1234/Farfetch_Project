import React from "react";
import { Summary } from "./Summary";
import {Box} from "@chakra-ui/react"
import ShipingAddress from "./shipingAddress";

const Checkout = () => {
  return (
      <Box marginLeft={'30%'}>
        <ShipingAddress />
       
      </Box>
        
    
  
   
    
  );
};

export default Checkout;