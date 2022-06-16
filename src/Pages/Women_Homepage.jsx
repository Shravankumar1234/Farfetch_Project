import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {TbHanger} from "react-icons/tb"
import {FaQuestionCircle} from "react-icons/fa"
import {BiMessage} from "react-icons/bi"

const WomensMainDiv=styled.div`
  display: flex;
  margin-top: ${props=>props.top};

`
const Image=styled.img`
  margin-top:${props=>props.Imgtop};
  width:${props=>props.Imgwidth};
  margin-left:${props=>props.Imgposition};
  margin-right:${props=>props.Imgpos};
  height: ${props=>props.Imgheight};
  
`;
const P=styled.h1`
margin-top:${props=>props.top};
  font-size:${props=>props.textHead};
  text-align:${props=>props.textpos};
  font-family:sans-serif;
  font-weight:${props=>props.weight}  
`
const Para=styled.p`
  font-size: ${props=>props.textsize};
  text-align:center;
  font-family:Arial, Helvetica, sans-serif;
`
const Button=styled.button`
  font-size:16px;
  text-align:center;
  margin-left:40%;
  height:50px;
  background-color:white;
  width:${props=>props.buttonwidth};
  font-weight:bold;
  border-radius:5px;

`;
const Imagesdiv=styled.div`
height: 550px;
width:100%;
display: grid;
grid-template-columns: ${props=>props.columns};
grid-template-rows:auto;
gap:10px;
margin-top:${props=>props.top};

`;
const DIV=styled.div`
height:450px;
width:80%;
margin-Left:15%;

`

export const WomenHomepage = () => {
  return (
    <>
    <WomensMainDiv>
          <Image Imgposition="8%" Imgwidth="40%" Imgtop="4%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/2247770/data/a11b74d71d5abd74b65f8adbe785056a.png?ratio=1x1_messaging-side&minWidth=637'></Image>
          <div style={{margin:"auto"}}>
            <P textHead="40px" textpos="center"> SALE: GET UP TO<br/> 50% OFF NOW</P>
            <Para textsize="20px">The greatest selection of sale pieces from the world’s <br/>finest fashion boutiques and brands — only on FARFETCH</Para>
            <br/>
           <Link to="/WomenProducts"><Button>Shop Now</Button></Link>
          </div>
    </WomensMainDiv>
    <WomensMainDiv>
             <div style={{margin:"auto"}}>
            <P textHead="30px" weight="lighter" textpos="center">FARFETCH BEAT is here</P>
            <Para textsize="14px">FARFETCH BEAT is here Introducing BEAT: exclusively curated releases created in <br/>collaboration with the most progressive voices in fashion and culture, only on<br/> FARFETCH. For BEAT 001, Opening Ceremony’s iconic varsity jacket is reimagined by designer<br/> Peter Do using upcycled parachute material <br/>from reimagined by designer Peter Do using upcycled parachute<br/> material from his very first show — get yours now</Para>
            <br/>
           <Link to="/WomenProducts"><Button>Shop Now</Button></Link>
          </div>
          <Image Imgpos="5%" Imgwidth="40%" Imgtop="4%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3597892/data/eb5c5cd180cb9f08a85fec52aaca5e80.png?ratio=1x1_messaging-side&minWidth=637'></Image>    
    </WomensMainDiv>
    <br/>

    <WomensMainDiv>
    <div>
    <Image Imgwidth="100%" Imgposition="8%"  Imgtop="4%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598052/data/90459291975db1890e152a07bbaa89b5.jpg?ratio=1x1_two-columns&minWidth=637'></Image>
    <Para>FEEL-GOOD FASHION: THE NEW SEASON IS HERE <br/>The summer collections have arrived in a blaze of rainbow-hued,floral-print glory.<br/> Added bonus? The most standout pieces have been crafted with the planet in mind. <br/>These are the ones to add to your wishlist now</Para>
    </div>
    <Image  Imgwidth="40%" Imgheight="700px" Imgposition="6%" Imgtop="2%" src='https://cdn-static.farfetch-contents.com/content/UP/people_page/2019/09/evergreen/NO_RESULTS_WW/CLOTHING-LG.jpg'></Image>

    </WomensMainDiv>
    <br/>
    <div>
          <P weight="lighter" textpos="center">New in: hand-picked daily from the world’s best brands and <br/>boutiques</P>
    </div>
      
    <Imagesdiv columns="repeat(4,1fr)">
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/44/22/37/18442237_40015720_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Alexander McQueen</P>
             <p>knitted tunic jumper</p>
             <p>$2,084</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/44/41/75/18444175_40010061_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Alexander McQueen</P>
             <p>knitted tunic jumper</p>
             <p>$2,084</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/36/53/05/18365305_39961927_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Alexander McQueen</P>
             <p>knitted tunic jumper</p>
             <p>$2,084</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/39/13/75/18391375_39558174_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Alexander McQueen</P>
             <p>knitted tunic jumper</p>
             <p>$2,084</p>
           </DIV>
           <br/>
           <div style={{marginLeft:"60%"}}>
           <Link to="/WomenProducts" > <Button buttonwidth="80%">Shop Now</Button></Link>
           </div>
    </Imagesdiv>
    <WomensMainDiv top="-10%">
             <div style={{margin:"auto"}}>
            <P textHead="30px" weight="lighter" textpos="center">CONSCIOUSLY MADE FINE <br/>JEWELERY</P>
            <br/>
           <Link to="/WomenProducts"><Button>Shop Now</Button></Link>
          </div>
          <Image Imgpos="6%" Imgwidth="30%"  Imgtop="5%" src='https://cdn-images.farfetch-contents.com/16/65/79/90/16657990_33412592_480.jpg'></Image>    
    </WomensMainDiv>
    <P top="-4%" textHead="30px" weight="lighter" textpos="center">This week’s highlights</P>
    
      <Imagesdiv columns="repeat(3,1fr)">
           <DIV >
             <Image Imgwidth="90%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598160/data/60ddcdee837a0b796b42ac3248abf6fb.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>SAINT LAURENT</p>
             <p>Unmistakably Anthony Vacarello</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%" Imgposition="5%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598180/data/58379f035d1ef5905edfa815e7d44d31.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>SAINT LAURENT</p>
             <p>Unmistakably Anthony Vacarello</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%"  src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598198/data/92af56676af0bdf0e1c120987fc4c6ba.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>SAINT LAURENT</p>
             <p>Unmistakably Anthony Vacarello</p>
           </DIV>
        </Imagesdiv>
        <br/>
        <br></br>
        <P top="0%" textHead="30px" weight="lighter" textpos="center">Discover: the conscious edit</P>
       <Imagesdiv columns="repeat(4,1fr)" top="1%">
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/50/61/62/18506162_39925420_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> GANNI</P>
             <p>ruffle-detail tie bolero</p>
             <p>$318</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/17/97/03/38/17970338_38225227_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Stella McCartney</P>
             <p>Falabella 50mm chain-embellised<br/> mules</p>
             <p>$1,071</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/40/18/56/18401856_39888619_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Collina Strada</P>
             <p>floral-print maxi skirt</p>
             <p>$726</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/37/96/97/18379697_39861007_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Balenciaga</P>
             <p>XS Bistro Basket tote bag</p>
             <p>$1,015</p>
           </DIV>
           <br/>
           <div style={{marginLeft:"60%"}}>
           <Link to="/WomenProducts" > <Button buttonwidth="80%">Shop Now</Button></Link>
           </div>
    </Imagesdiv>
    <P  top="1%" textHead="30px" weight="lighter" textpos="center">Shop the world’s best boutiques</P>
      <Imagesdiv columns="repeat(3,1fr)">
           <DIV >
             <Image Imgwidth="90%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598086/data/9b0f445bd3b8721ea2bda8814cc3bc49.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>THE MODERN FEMININITY EDIT</p>
             <p>Dreamy silhouettes and muted palettes</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%" Imgposition="5%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598096/data/bf41d5665f2f6f1e5a921993dec7f0dc.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>THE EXPRESSIONIST EDIT</p>
             <p>Cult collaborations and exciting launches</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%"  src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598110/data/0a779d080b4ecf1bf9b12986a390faca.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>THE CLASSIC EDIT</p>
             <p>Timeless pieces to love forever</p>
           </DIV>
        </Imagesdiv>
        <br/>
        <br/>
        <br/>
        <WomensMainDiv>
        
        <div style={{height:"110px",width:"25%",border:"0.5px dotted gray",margin:"auto"}}>
        <div style={{marginLeft:"3%"}}>
             <TbHanger style={{fontSize:"25px"}}/>
             <p>HOW TO SHOP</p>
             <p>Your Guide to Shopping and Placing Orders</p>
             </div>
         </div>
        <div style={{height:"110px",width:"25%",border:"0.5px dotted gray",margin:"auto"}}>
        <div style={{marginLeft:"3%"}}>
             <FaQuestionCircle style={{fontSize:"25px"}}/>
             <p>FAQS</p>
             <p>Your questions answered</p>
             </div></div>
        <div style={{height:"110px",width:"25%",border:"0.5px dotted gray",margin:"auto"}}>
        <div style={{marginLeft:"3%"}}>
             <BiMessage style={{fontSize:"22px"}}/>
             <p>NEED HELP?</p>
             <p>Contact our gobal Customer Service Team</p>
             </div></div>
        </WomensMainDiv>
        
    
    </>
  )
}
