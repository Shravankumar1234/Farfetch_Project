
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

export const KidsHomepage = () => {
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
            <P textHead="30px" weight="lighter" textpos="center">Big brands for big personalities  </P>
            <Para textsize="14px">Responsibly made pieces from iconic names, featuring Burberry, Stella</Para>
            <br/>
           <Link to="/WomenProducts"><Button>Shop Now</Button></Link>
          </div>
          <Image Imgpos="5%" Imgwidth="40%" Imgtop="4%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600044/data/67d580bd81dfd2e369ddd3528855b1a4.jpg?ratio=1x1_messaging-side&minWidth=637'></Image>    
    </WomensMainDiv>
    <br/>
    <div>
          <P weight="lighter" textpos="center">The best of new in</P>
    </div>
      
    <Imagesdiv columns="repeat(3,1fr)">
           <DIV >
             <Image Imgwidth="80%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600394/data/4de97243ca12ac7f12950fce6f8405f5.jpg?ratio=1x1_three-columns&minWidth=409'></Image>
             <P textHead="18px">BABY</P>
             <p>Strap in to summer’s new shoes</p>
             
           </DIV>
           <DIV >
             <Image Imgwidth="80%"  src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600404/data/b35b6a03d57ea2427bcfefc3af7a0509.jpg?ratio=1x1_three-columns&minWidth=409'></Image>

             <P textHead="18px">KIDS</P>
             <p>New-seson sweaters and more</p>
           
           </DIV>
           <DIV >
             <Image Imgwidth="80%"  src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600418/data/aeef3c3d88a37757297536becaf1ea8a.jpg?ratio=1x1_three-columns&minWidth=409'></Image>
            
             <P textHead="18px">TEENS</P>
             <p>Stylish separates to complete the look</p>
            
           </DIV>
           
           <br/>
           <div>
           <Link to="/WomenProducts" > <Button buttonwidth="20%">Shop Now</Button></Link>
           </div>
    </Imagesdiv>
   
    <P top="0%" textHead="30px" weight="lighter" textpos="center">This week’s highlights</P>
    
      <Imagesdiv columns="repeat(2,1fr)" top="2%">
           <DIV >
             <Image Imgwidth="90%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600366/data/d80b1be5aae6d81f79750bd3d7555243.jpg?ratio=1x1_two-columns&minWidth=637'></Image>
             <p>PALM ANGELS KIDS</p>
             <p>Sporty co-ords for a summer of adventure</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%" Imgposition="2%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600380/data/16e2e043ce1deae345ee029a1945871d.jpg?ratio=1x1_two-columns&minWidth=637'></Image>
             <p>NEW-SEASON PRINTS AND PATTERNS</p>
             <p>Fresh shades, easy layers, planet-friently</p>
           </DIV>
           
        </Imagesdiv>
        <br/>
        <br></br>
        <P top="5%" textHead="30px" weight="lighter" textpos="center">Trending now: color-pop sneakers</P>
       <Imagesdiv columns="repeat(4,1fr)" top="1%">
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/17/11/54/96/17115496_34621171_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px"> Jordan Kids</P>
             <p>Jordan 1 Mid SE "Electro Orange" <br/>sneakers</p>
             <p>$269</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/18/43/28/99/18432899_39510679_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">Versace Kids</P>
             <p>all-over graphic print sneakers</p>
             <p>$516</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/17/32/60/15/17326015_35741529_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">Golden Goose Kids</P>
             <p>Old School sneakers</p>
             <p>$381</p>
           </DIV>
           <DIV >
             <Image Imgwidth="70%" Imgposition="8%" src='https://cdn-images.farfetch-contents.com/16/29/05/28/16290528_31115700_600.jpg'></Image>
             <p>New Season</p>
             <P textHead="18px">Jordan Kids</P>
             <p>Air Jordan 1 Retro High "Volt Gold" <br/>sneakers</p>
             <p>$212</p>
           </DIV>
           <br/>
           <div style={{marginLeft:"60%"}}>
           <Link to="/WomenProducts" > <Button buttonwidth="80%">Shop Now</Button></Link>
           </div>
    </Imagesdiv>
    
      <Imagesdiv columns="repeat(2,1fr)" top="1%">
           <DIV >
             <Image Imgwidth="90%" Imgposition="8%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600434/data/bd021090434393c41c6b92f69b6a78b9.jpg?ratio=1x1_two-columns&minWidth=637'></Image>
             <p>PALM ANGELS KIDS</p>
             <p>Dreamy silhouettes and muted palettes</p>
           </DIV>
           <DIV >
             <Image Imgwidth="90%" Imgposition="5%" src='https://cdn-static.farfetch-contents.com/cms-cm/in/media/3600442/data/65be83da871df5454a5b62504483eef3.jpg?ratio=1x1_two-columns&minWidth=637'></Image>
             <p>PALM ANGELS KIDS</p>
             <p>Cult collaborations and exciting launches</p>
           </DIV>
           
        </Imagesdiv>
        <br/>
        <br/>
        <br/>
        <WomensMainDiv top="5%">
        
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

