import React from 'react'
import styled from 'styled-components'
import {FiInstagram} from "react-icons/fi"
import {IoLogoFacebook} from "react-icons/io"
import {GrTwitter} from "react-icons/gr"
import {BsSnapchat,BsYoutube} from "react-icons/bs"
import {FaPinterestSquare} from "react-icons/fa"

const FooterDiv=styled.div`
    height:300px;
    width:50%;
    margin: auto;
   margin-top:8%;
`
const Head=styled.div`
    font-size: 30px;
    font-family:sans-serif;
    font-weight:bold
`
const Para=styled.p`
    font-size:16px;
    font-family:Verdana, Geneva, Tahoma, sans-serif
`
const Emaildiv=styled.p`
    font-size: 18px;
`
const EmailMaindiv=styled.div`
display: flex;
`
const Input=styled.input`
    width:50%;
    height:45px;
    font-size: 25px;
    border-radius:10px;
`
const Button=styled.button`
    width:10%;
    font-size:18px;
    margin-left:10px;
    background-color:black;
    color:white;
     border-radius:10px;
`
const FooterMainDiv=styled.div`
    height: 450px;
    width: 100%;
    background-color: black;
`
const P=styled.div`
    font-size:16px;
    color: white;
    padding-left:80px;
    font-family:sans-serif
`
const P1=styled.div`
    font-size:16px;
    color: white;
    padding-left:10px;
    font-family:sans-serif
`;
const Para1=styled.p`
    font-size:14px;
    color: white;
    padding-left:80px;
    font-family:sans-serif
`

export const Footer = () => {
  return (
    <>
    <FooterDiv >
        <Head>
            DOWNLOAD THE FARFETCH APP
        </Head>
        <Para>
             Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. More about the app
        </Para>
        
        
        <Emaildiv>
             EMAIL.ME
        </Emaildiv>
        <Para>
        Enter your email and we'll send you a link to download the free app
        </Para>
        <EmailMaindiv>
        <Input type="search" placeholder="Email address"/>
        <Button>Send</Button>
         
        </EmailMaindiv>
    </FooterDiv>
    <FooterMainDiv>
            <EmailMaindiv>
                        <div>
                        <br/>
                              <P>FARFETCH APP</P>
                              <br/>
                              <P>Farfetch App for iOS and Android</P>
                        </div>
                        <div style={{marginLeft:"10%"}}>
                        <br/>
                        <P>DESTINATION/REGION, CURRENCY AND LANGUAGE</P>
                        <br/>
                        <div style={{display:"flex"}}>
                        <div style={{marginLeft:"18%"}}>
                           <img src="https://cdn.wallpapersafari.com/97/48/fvFY0M.jpg" style={{borderRadius:"50%",width:"20px",height:"20px",}}></img>
                           </div>
                           <P1>India,</P1>
                           <P1>USD $</P1>
                        </div>
                        <br></br>
                          <br></br>
                          <br></br>
                         <div>
                             <P>FOLLOW US</P>
                              <br/>
                             <div style={{display:"flex",marginLeft:"16%"}}>
                            
                                    <FiInstagram style={{color:"white",fontSize:"20px",}}/>
                                    <IoLogoFacebook style={{color:"white",fontSize:"20px",paddingLeft:"10px"}}/>
                                    <GrTwitter style={{color:"white",fontSize:"20px",paddingLeft:"10px"}}/>
                                    <BsSnapchat style={{color:"white",fontSize:"20px",paddingLeft:"10px"}}/>
                                    <FaPinterestSquare style={{color:"white",fontSize:"20px",paddingLeft:"10px"}}/>
                                    <BsYoutube style={{color:"white",fontSize:"20px",paddingLeft:"10px"}}/>
                             </div>
                         </div>
                        </div>
           
        <div>
         <br/>
        <P>CUSTOMER SERVICE</P>
        <Para1>Orders & delivery</Para1>
        <Para1>Payment & pricing</Para1>
        <Para1>Returns & refunds</Para1>
        <Para1>FAQs</Para1>
        <Para1>Terms & conditions</Para1>
        <Para1>Promotion terms & <br/>conditions</Para1>
        <Para1>Privacy policy</Para1>
        <Para1>Accessibility</Para1>
        </div>
     <div>
     <br/>
     <P>ABOUT FARFETCH</P>
     <Para1>About Us</Para1>
     <Para1>Investors</Para1>
     <Para1>Boutique Partners</Para1>
     <Para1>Affiliate Programme</Para1>
     <Para1>Student discount UNiDAYS</Para1>
     <Para1>Youth discount</Para1>
     <Para1>Careers</Para1>
     <Para1>Customer Promise</Para1>
     <Para1>FARFETCH App</Para1>
     <Para1>Sitemap</Para1>
     <Para1>Positively FARFETCH</Para1>
     </div>
</EmailMaindiv>
<div>
<Para1>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.<br/>
© Copyright 2022 FARFETCH UK Limited. All rights reserved.</Para1>
</div>
      
    </FooterMainDiv>
    </>
  )
}
