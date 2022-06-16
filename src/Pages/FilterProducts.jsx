import React,{useState,useEffect} from 'react'
import { Select,Box,Text,Checkbox,CheckboxGroup,VStack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductsdata } from '../Redux/Pages_redux/Action'

export const FilterProducts = () => {
    const [SearchParams,setSearchParams]=useSearchParams();
  const [CategoryValues,setCategory]=useState(SearchParams.getAll("category")||[])
   const dispatch=useDispatch()
  const handleFilter=(value)=>{
           setCategory(value)
  };
  useEffect(()=>{
     setSearchParams({category:CategoryValues});
     let params={
       category:SearchParams.getAll("category")
    }
          dispatch(getProductsdata(params))

  },[CategoryValues,SearchParams,dispatch,setSearchParams])
  return (
    <>
    <Box >
    <Box >
        <Box p=" 1rem 2rem">
            <Text fontSize="20px">Filters</Text>
            <Text fontWeight="bold">Category</Text>
            <CheckboxGroup colorScheme='green' defaultValue={CategoryValues} onChange={handleFilter}>
       <VStack alignItems={"baseline"}>
        <Checkbox value="Men's clothing">Mens' Clothing</Checkbox>
        < Checkbox value="women's clothing">Womens' Clothing</Checkbox>
         <Checkbox value='Kids clothing'>Kids Clothing</Checkbox>
         < Checkbox value='Jewelry'>Jewelry</Checkbox>
         <Checkbox value='bags'>bags</Checkbox>
  </VStack>
</CheckboxGroup>
        </Box>
    </Box>
     <Box >
        <Box p=" 1rem 2rem">
            <Text fontWeight="bold" marginTop="-20px">Brand</Text> 
             <Text fontWeight="bold" marginTop="-10px">Colour</Text> 
             <Text fontWeight="bold" marginTop="-10px">Sale Discount</Text> 
             <Text fontWeight="bold" marginTop="-10px">Price</Text> 
             <Text fontWeight="bold" marginTop="-10px">Conscious</Text> 
        </Box>
    </Box>
    </Box>
   </>
  )
}
