import React from 'react'
import {Box,Heading,Text,Button,Image} from"@chakra-ui/react"
import { Link } from 'react-router-dom'
import {IoBagCheckOutline} from "react-icons/io5"
import { useSelector } from 'react-redux'


export const Summary = () => {
  const Cart=useSelector((state)=>state.ProductsData.Cart)
   
  let total=Cart?.reduce(function(acc,el){
    return acc+el.Price
  },0)
  total+=50;
  console.log(total)
  return (
   <Box height={'auto'} boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"  marginTop={'5%'} marginLeft={'10%'} width={"400px"}>
   
         <Heading as='h3' textAlign={'left'}  marginLeft={'3%'} fontFamily={'cursive'} fontWeight={'hairline'}>Summary</Heading>

          {Cart?.map((item)=>(
             <Box >
              <Box display={'flex'} marginTop={'3%'}>
                <Image src={item.Img} width={'80px'} marginLeft={'2%'}></Image>
                <Box marginLeft={'5%'}>
                <Text  marginTop="5%">{item.Name}</Text>
                <Text marginLeft={'2%'} fontFamily="cursive" fontSize={'18px'} marginTop="5%">SubTotal:${item.Price}</Text>
                </Box>
              </Box>
              <hr/>
             </Box>
    ))}
      <Box display={'flex'}>
      <Text textAlign={'left'}  marginLeft={'3%'} fontFamily={'cursive'} fontWeight={'hairline'}>Delivery :</Text>
      <Text textAlign={'left'}  marginLeft={'15%'} fontFamily={'cursive'} fontWeight={'hairline'}>$50</Text>
      </Box>
        
      <hr />
      <Box display={'flex'}>
      <Text textAlign={'left'}  marginLeft={'3%'} fontFamily={'cursive'} fontWeight={'hairline'} fontSize="25px">Total:</Text>
      <Text   marginLeft={'15%'} fontFamily={'cursive'} fontWeight={'hairline'} fontSize="25px">${total} USD</Text>
      </Box>
      <Link to="/Checkout" ><Button variant="solid" fontSize={'20px'}  cursor={'pointer'} rightIcon={<IoBagCheckOutline fontSize={'25px'}/>} border="none" borderRadius={"10px"} color={'white'}  bg={'black'} width="60%" marginLeft={'15%'} height={'auto'}textDecoration={'none'}>CheckOut</Button></Link>
    </Box>
  ) 
}
