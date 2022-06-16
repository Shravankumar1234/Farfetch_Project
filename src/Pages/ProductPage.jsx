import React,{useEffect} from 'react'
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Heading, 
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchcartdata, Singledata } from '../Redux/Pages_redux/Action';
import { addproducts } from '../Redux/Pages_redux/Action';
import {BsSuitHeart} from "react-icons/bs"


export const ProductPage = () => {
    const params=useParams();
    const SingleProduct=useSelector((state)=>state.ProductsData.currentproduct)
    const dispatch=useDispatch();
    const {id}=params;
    useEffect(()=>{
        dispatch(Singledata(id))
        dispatch(fetchcartdata())
    },[id,dispatch])
 
    function handleCart(){
       SingleProduct&&dispatch(addproducts(SingleProduct)) 
      window.location.reload()
    }
  

 return (
  <>
  <Box>
    
        <Flex display={'flex'}>
         
       
            <Box  marginLeft={"180"}>
            <Image src={SingleProduct?.Img} alt='Dan Abramov' width="65%"/>
             </Box>
             <Box marginLeft="-8%" marginTop="5%">
              <Heading fontFamily="body" fontSize="40" color="indigo">{SingleProduct?.Name}</Heading>
              <Box>
                <Text fontFamily="cursive" fontSize="20" color="black">${SingleProduct?.Price} USD</Text>
              </Box>
              <Box>
                <Text fontFamily="cursive" color='GrayText'>{SingleProduct?.shortDes}</Text>
              </Box>
              <Box>
                <Text textAlign="justify" fontFamily="cursive" color='GrayText'>{SingleProduct?.LongDes}</Text>
              </Box >
              <Button width="30%" textAlign="center" height='40px' borderRadius="15px" fontSize="20px" backgroundColor="black" color="white" fontWeight="bold" onClick={ handleCart}>Add To Bag</Button>
              
              <Button width="20%"  textAlign="center" height='40px' borderRadius="15px" fontSize="18px" marginLeft="2%" backgroundColor="white" fontWeight="bold" >wishlist <BsSuitHeart /> </Button>
             </Box>
       
       </Flex>
 </Box>
 
 </>
     
    
    
  );
}
