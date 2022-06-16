import React from 'react'
import {Box, Heading,Stack,Image,Text, Button, Flex} from "@chakra-ui/react"
import { BsTranslate } from 'react-icons/bs'
import {TiDelete} from "react-icons/ti"

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletecartitem } from '../Redux/Pages_redux/Action'

import { Summary } from './Summary'

export const Cart = () => {
   const Cart=useSelector((state)=>state.ProductsData.Cart)
   const total=useSelector((state)=>state.ProductsData)
   
   const dispatch=useDispatch()
   const removeProduct=(id)=>{
          dispatch(deletecartitem(id))
   }
   console.log(total)

  return (
     <Stack direction={{base:'column', md:'row'}} justifyContent={'space-around'}>
    <Box >
      <Heading as='h2' size='xl' marginLeft={'30%'}>SHOPPING BAG</Heading>
      {Cart?.map((item)=>
      (

               <CartItems   key={item.id} id={item.id} image={item.Img} title={item.Name} price={item.Price} LongDes={item.LongDes} handleDelete={removeProduct} />

      ))}
    </Box>
    <Box marginTop={'10%'} marginLeft="-25%" width="400px">
          <Summary/>
    </Box>
     </Stack>
      
   
  )
}


function CartItems({id,image,title,price,LongDes,handleDelete,sum}){
  
  return(
    <>
    <Stack direction={{base:'column',md:'row' }} >
  <Stack  rounded={'lg'} width={'fit-content'}  marginTop={'2%'} boxShadow={' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}>
    <Stack direction={{base:'column',md:'row' }} justifyContent={'center'}>
     <Box height={'400px'} width={'300px'}  position={'relative'} padding={'0 1rem'}
     _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '80%',
            h: '80%',
            pos: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%,-50%)`,
            backgroundImage: `url(${image})`,
            filter: 'blur(200px)',
            zIndex: 1,
          }}>
           <Image
            rounded={'lg'}
            height={300}
            width={300}
            objectFit={'contain'}
             boxShadow={'2xl'}
            src={image}
           
           />
     </Box>
     
     <Box height={'300px'} width={'300px'}  marginLeft={'4'} >
      <Stack p={4}>
        <Heading as='h2'>{title}</Heading>
        <Text fontSize={'sm'} textTransform={'lowercase'}color={'GrayText'}>{LongDes}</Text>
        <Text fontWeight={'bold'} fontSize={'xl'}>${price}</Text>
        <Button variant="solid" rightIcon={<TiDelete fontSize={'30px'}/>} border="none" borderRadius={"10px"} color={'white'} bg='teal' width="80%" onClick={()=>handleDelete(id)}>Remove</Button>
       <Text>{sum}</Text>
        </Stack>
     </Box>
     </Stack>
  </Stack> 
    </Stack>
    
    </>
  )
}
   
  

