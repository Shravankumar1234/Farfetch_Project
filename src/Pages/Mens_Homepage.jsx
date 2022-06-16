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
margin-top:${props=>props.top}
`;
const DIV=styled.div`
height:450px;
width:80%;
margin-Left:15%;
/* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
`

export const MensHomepage = () => {
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
    <Image Imgwidth="100%" Imgposition="8%"  Imgtop="4%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598914/data/eea04de7c0a5e9256dbdf48cc6984280.jpg?ratio=1x1_two-columns&minWidth=637'></Image>
    <Para>FROM THE VAULT: THE WORLD’S MOST COVETED TIMEPIECES<br/>The designs you know, from the iconic names you love — this is your ultimate<br/>watch wish list. Our expert guest editor @dimepiece.co shares the attributes that<br/>make these timepieces so unique and why you should invest now</Para>
    </div>
    <Image  Imgwidth="40%" Imgheight="700px" Imgposition="6%" Imgtop="2%" src='https://cdn-images.farfetch-contents.com/14/24/45/78/14244578_20243811_480.jpg'></Image>

    </WomensMainDiv>
    <br/>
    <div>
          <P weight="lighter" textpos="center">New in: hand-picked daily from the world’s best brands and<br/>boutiques</P>
    </div>
      
    <Imagesdiv columns="repeat(4,1fr)">
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/22/29/00/18222900_39341070_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Balmain</P>
             <p>logo-print long-sleeved T-Shirt</p>
             <p>$541</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/17/67/69/83/17676983_39746287_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">AMIRI</P>
             <p>Watercolour logo-print skinny jeans</p>
             <p>$1,947</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/46/79/40/18467940_39900824_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">Bottega Veneta</P>
             <p>Intrecciato shoulder bag</p>
             <p>$2,128</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/54/04/24/18540424_40009504_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Alexander McQueen</P>
             <p>knitted tunic jumper</p>
             <p>$1,084</p>
           </DIV>
           <br/>
           <div style={{marginLeft:"60%"}}>
           <Link to="/WomenProducts" > <Button buttonwidth="80%">Shop Now</Button></Link>
           </div>
    </Imagesdiv>
    <WomensMainDiv top="-10%">
             <div style={{margin:"auto"}}>
            <P textHead="30px" weight="lighter" textpos="center">CONSCIOUSLY MADE FINE <br/>INDIVIDUALLY STYLED</P>
            <br/>
           <Link to="/WomenProducts"><Button>Shop Now</Button></Link>
          </div>
          <Image Imgpos="6%" Imgwidth="30%"  Imgtop="5%" src='https://cdn-images.farfetch-contents.com/18/25/23/47/18252347_39581575_480.jpg'></Image>    
    </WomensMainDiv>
    <P top="-4%" textHead="30px" weight="lighter" textpos="center">This week’s highlights</P>
    
      <Imagesdiv columns="repeat(3,1fr)">
           <DIV >
             <Image Imgwidth="90%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598768/data/57f70d831f58182c5daca0e38c2149cc.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>STONE ISLAND</p>
             <p>Now in sunshine-ready hues</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%" Imgposition="5%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598784/data/826eb997e4c6da7ea1fed74722ab4c6a.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>YOUR NEW-SEASON LOOKS ARE HERE</p>
             <p>Fresh shades, easy layers, planet-friently</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%"  src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598806/data/4adc1b17010b5dad2c7c4dfe09d4185f.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>YOUR FESTIVAL WARDROBE</p>
             <p>Unmistakably Anthony Vacarello</p>
           </DIV>
        </Imagesdiv>
        <br/>
        <br></br>
        <P top="0%" textHead="30px" weight="lighter" textpos="center">Trending now: new-season polo shirts</P>
       <Imagesdiv columns="repeat(4,1fr)" top="1%">
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/41/87/89/18418789_39530431_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Prada</P>
             <p>embroidered-logo polo shirt</p>
             <p>$2,880</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/15/50/91/11/15509111_27821069_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">ETRO</P>
             <p>embroidered-logo polo shirt</p>
             <p>$290</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/47/57/60/18475760_39794855_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">Dolce & Gabbana</P>
             <p>mixed-print button-fastening polo shirt</p>
             <p>$2,655</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/22/28/72/18222872_39071610_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">Balmain</P>
             <p>logo-print polo shirt</p>
             <p>$541</p>
           </DIV>
           <br/>
           <div style={{marginLeft:"60%"}}>
           <Link to="/WomenProducts" > <Button buttonwidth="80%">Shop Now</Button></Link>
           </div>
    </Imagesdiv>
    <P  top="1%" textHead="30px" weight="lighter" textpos="center">Shop the world’s best boutiques</P>
      <Imagesdiv columns="repeat(3,1fr)">
           <DIV >
             <Image Imgwidth="90%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598832/data/326b0e6a8e0e99f650abcfd02e60371e.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>THE STREETWEAR EDIT</p>
             <p>Dreamy silhouettes and muted palettes</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%" Imgposition="5%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598846/data/200a860044bdf610b74bdfdb45cb13f4.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
             <p>THE EXPRESSIONIST EDIT</p>
             <p>Cult collaborations and exciting launches</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%"  src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598868/data/9f47da6ecf2dc69c832f363b242c9117.jpg?ratio=3x4_three-columns&minWidth=409'></Image>
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

