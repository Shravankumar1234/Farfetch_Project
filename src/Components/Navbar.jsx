import React,{useState} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {FaRegUser} from "react-icons/fa"
import {BsSuitHeart} from "react-icons/bs"
import {IoBagHandleOutline} from "react-icons/io5"
import {AiOutlineSearch} from "react-icons/ai"
import { CartCounter } from '../Pages/CartCounter'
import { Box, Button } from '@chakra-ui/react'
import{GrLogout} from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import { useAuth, logOut } from '../Pages/Firebase/firebase'


const MainNavdiv=styled.div`
    height:180px;
    width:100%;
    position: sticky;
    top:0;
    z-index: 1;
   background-color:white;
   box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  
`

const Flex=styled.div`
    display: flex;
    justify-content:center;
`
const Text=styled.p`
    font-size: 16px;
    color:${props=>props.setcolor};
   padding-left:30px;
   margin-top:5px;
`
const Offerdiv=styled.div`
    height: 40px;
    width:100%;
    background-color:red;

`
const Menudiv=styled.div`
    height:70px;
    width:100%;
   `
const Flex1=styled.div`
    display: flex;
    justify-content:space-around;
   
`;
const DIV1=styled.div`
     padding-top:${props=>props.pt};
     display: flex;
     position: ${props=>props.pos};
     padding: ${props=>props.p};
     margin-left:${props=>props.ml}
    
    
`
const INPUT=styled.input`
    width: 250px;
    height: 45px;
    font-size:18px;
`
const DIV2=styled.div`
    display: flex;
    margin-top:15px;
`

export const Navbar = () => {
    const [loading,setLoading]=useState(false)
    const currentUser=useAuth()
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try {
            setLoading(true)
            logOut();
            alert("Logout Successful")
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
  return (
     <MainNavdiv>
    <Offerdiv>
        <Flex justify="centre">
             <marquee style={{color:"white",marginTop:"10px"}} >Sale </marquee>
              <marquee  style={{color:"white",marginTop:"10px"}}>Up to 50% off </marquee>
              <marquee style={{color:"white",marginTop:"10px"}}>Shop the Worlds Best Designer</marquee>
        </Flex>
    </Offerdiv>
    <Menudiv>
        <Flex1>   
            <DIV1 pt="20px">
               <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"18px",}}>Women</Link>
               <Link to="/Mens" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"18px"}}>Men</Link>
               <Link to="/Kids" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"18px"}}>Kids</Link>
               
        </DIV1>
        <DIV1 pt="20px">
            <h1 style={{marginTop:"-2%",fontFamily:"sans-serif",fontSize:"40px"}}>FARFETCH</h1>
        </DIV1>
        <DIV1 pt="20px">
            <Link to="/login" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"18px"}}>
                  <FaRegUser fontSize="20px"/>
            </Link>
                <Link to="/Cart"style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"18px"}}><IoBagHandleOutline fontSize="20px"/></Link>
               <DIV1 >
                <CartCounter/>
                <Link to="/"style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"18px", marginRight:'20px'}}><BsSuitHeart fontSize="20px"/></Link>

               </DIV1>
               <Box disabled={loading || currentUser==null} onClick={handleLogout} cursor="pointer">
                Logout <GrLogout />
            </Box>
            
        </DIV1>
        </Flex1>
    </Menudiv>
    <Menudiv>
            <Flex1>
                <DIV1>
               <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Sale</Link>
               <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>New In</Link>
               <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Shop By</Link>
                <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Brands</Link>
                 <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Clothing</Link>
                 <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Shoes</Link>
                 <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Accessories</Link>
                 <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Jewelry</Link>
                 <Link to="/" style={{paddingLeft:"20px",textDecoration:"none",color:'black',fontSize:"16px"}}>Pre-Owned</Link>
                </DIV1>
                <DIV2>
                     <INPUT type="search" placeholder='Search'/>
                     <AiOutlineSearch style={{marginTop:"12px",fontSize:"20px",marginLeft:'-10%'}}/>
                </DIV2>
            </Flex1>
    </Menudiv>
    </MainNavdiv>

  )
}
