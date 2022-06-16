import styled from "styled-components";



export const Button = styled.button`
  background-color: #000;
    display: flex;
    align-items: center;
    padding: ${(props) => props.padding};
    color: white;
    font-size: 14px;
    border: none;
    width:${(props) => props.width} ;
    display:flex; 
    justify-content:center;
    cursor: pointer;
    font-size:${(props) => props.fontSize}
`;


export const CheckoutContainer = styled.div`
width:80%;
display: flex;
margin-left:10%;

`;
export const ShipingAdd = styled.div`
div:first-child{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top:92px ;
width:60%;
border-top:4px solid black;
padding: 20px 15px;
background-color:#fff ;
input:disabled{
  background-color:#fff;
  cursor: not-allowed;
}
input:nth-child(7){
  margin-bottom:10px ;
}
input:nth-child(10){
  margin-bottom:10px ;
}
input~p{
  text-decoration: underline;
  font-weight: 100;
  font-size:13px;
  margin:0px;
  margin-bottom:18px ;
  cursor: pointer;
}
}
div:nth-child(2){
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width:60%;
  background-color:#fff ;
  padding:20px;
  margin:20px 0px ;
  p{
    margin-bottom:5px ;
  }
div{
  display: flex;
  align-items: center;
  border-radius:5px ;
  width:97% ;
  height:10px;
  margin: 0px;
  background-color:#E6F0F8 ;
  section{
    margin-right:10px ;
    color: #0065AD;
    font-size: 20px;
  }
  h4{
    margin:0px;
    font-size:14px;
    color:#0065AD ;
  }
}
}
div:nth-child(3){
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width:60%;
  background-color:#fff ;
  padding:20px ;
  margin:20px 0px ;
  height:auto ;
  div{
    border:3px solid #909090;
    width:92%;
    border-radius:5px;
    position:relative;
    height:auto ;
    margin:20px;
    h2{
      top:-2%;
      right:-11px ;
      position:absolute;
      background-color:#fff;
      border-radius:50%;
      display: flex;
      align-items:center;
      justify-content:center;
    }
    p{
      margin-top:0px;
    }
    img{
      margin-right:10px ;
    }
  }
  .first-select{
    margin-right: 30px;
  }
  img{
  margin-bottom:15px ;
}
}
.button{
  background-color:#fff ;
  width:59%;
  height:auto;
  padding:20px ;
  display: flex;
  justify-content:center;
}
`;

export const INPUT = styled.input`
padding:10px;
border-radius:5px;
border:1px solid #8C8C8C;
width:${(props) => props.width};
margin-top:10px ;
margin-bottom:20px;
font-size:16px;
color:black;
outline:none;
`;


export const CartProduct = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
left: 59%;
top:15.5%;
position :fixed;
 width:20% ;
 height:550px ;
background-color:#fff;
padding: 0px 20px;
margin: 0px 20px;
margin-top:12px ;
p{
  margin:8px 0px ;
  font-size:14px;
}
.one p:first-child{
  font-weight:600 ;
  margin:10px 0px ;
  margin-top:15px;
}
div:first-child,div:nth-child(4),div:nth-child(6){
  display: flex;
  justify-content: space-between;
  align-items: center
}
.three{
  border-top: 1px solid #CCCCCC;
  border-bottom: 1px solid #CCCCCC;
  padding:10px 0px ;
}
.four{
  border-bottom: 1px solid #CCCCCC;
  padding:20px 0px ;
}
.two{
  overflow-y:scroll;
  height:300px;
  margin-bottom:10px ;
  padding:0px 10px ;
  div{
    display:flex;
    div{
      display:flex;
      flex-direction:column;
    }
  }
}
select{
  font-size:14px;
  border:none ;
  outline:none;
}
h3{
  font-weight: 100;
}
`;



export const SELECT = styled.select`
width:46%;
padding:10px;
border-radius:5px;
border:1px solid #8C8C8C;
margin-top:10px ;
margin-bottom:20px;
font-size:16px;
color:black;
outline:none;
`;