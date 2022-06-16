import React,{useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {fetchcartdata} from "../Redux/Pages_redux/Action"
import {fetchcartsuccess} from "../Redux/Pages_redux/Action"
export const CartCounter = () => {
    const Cart=useSelector((state)=>state.ProductsData.Cart)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        if(Cart?.length===0){
           dispatch(fetchcartdata())
        }
    },[dispatch])


  return (
      <Box backgroundColor="black" color="white" height="20px" width="20px" textAlign="center" borderRadius="50%">{Cart?.length ? Cart.length:0 }</Box>
  )
}
