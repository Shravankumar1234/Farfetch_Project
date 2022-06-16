import React,{useEffect} from 'react'
import { Box,Center,Stack, useColorModeValue,Image,Heading,Text, Grid,CircularProgress, color, Button} from '@chakra-ui/react'
import {FilterProducts} from "./FilterProducts"
import { useDispatch,useSelector } from 'react-redux';
import { fetchcartdata, getProductsdata } from '../Redux/Pages_redux/Action';
import {Link, Navigate} from "react-router-dom"
import {AiOutlineHeart} from "react-icons/ai"

export const WomenProducts = () => {
  const Loading=useSelector((state)=>state.ProductsData.Loading)
  const Products=useSelector((state)=>state.ProductsData.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductsdata())
        
    },[dispatch])
    console.log(Products)
    return (
      <>
    <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box>
           <FilterProducts  />
        </Box>
        <Box >
            <Heading as="h3" textAlign="center" marginTop="-28%"  fontSize={'3xl'}>ALL Products</Heading>
            {Loading && <CircularProgress isIndeterminate color='red.300' marginLeft="50%" height="800px" width="100%" />}
            <Grid  display="grid" gridTemplateColumns="repeat(4,1fr)"marginLeft="10%" >
                {Products?.map((item)=>( 
                    <ProductSimple  Id={item.id} image={item.Img} title={item.Name} price={item.Price} shortDes={item.shortDes}/>
                ))}
           </Grid>
        </Box>
        </Stack>
    </Box>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  )
};
 function ProductSimple({Id,image,title,price,shortDes}) {
  return (
    <Center py={12} >
      <Box  
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.1000')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        boxShadow= {'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}
        >
        <Box 
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: 1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}  >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
             boxShadow={'2xl'}
             boxShadow={' rgba(149, 157, 165, 0.2) 0px 8px 24px'} 
           
            src={image}
           
           />
        </Box>
        <Stack pt={2} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'sans-serif'} fontWeight={500} color={'GrayText.400'}>
          {title}
          </Heading>
          <Text  fontSize={'sm'} textTransform={'lowercase'}color={'GrayText'}>
            {shortDes}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={500} fontSize={'xl'}>
             ${price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
          <Link to={`/ProductPage/${Id}`} style={{textDecoration:"none" ,color:"CaptionText"}}><Button color={'white'} variant='outline' width={200} borderRadius={'10px'} bg="black">Quick View</Button></Link>
        </Stack>
      </Box>
    </Center>
  );
}


