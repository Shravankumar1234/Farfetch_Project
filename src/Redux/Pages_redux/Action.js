import axios from "axios";

export const GET_REQUEST="GET_REQUEST";
export const GET_SUCCESS="GET_SUCCESS";
export const GET_FAILURE="GET_FAILURE";

export const SINGLE_SUCCESS="SINGLE_SUCCESS";
export const SINGLE_FAILURE="SINGLE_FAILURE";
export const SINGLE_REQUEST="SINGLE_REQUEST";


export const CART_FAILURE="CART_FAILURE";
export const CART_REQUEST="CART_REQUEST";
export const CART_SUCCESS="CART_SUCCESS";

export const FETCH_CART_FAILURE="FETCH_CART_FAILURE";
export const FETCH_CART_REQUEST="FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS="FETCH_CART_SUCCESS";



export const DELETE_CART_FAILURE="DELETE_CART_FAILURE";
export const DELETE_CART_REQUEST="DELETE_CART_REQUEST";
export const DELETE_CART_SUCCESS="DELETE_CART_SUCCESS";


export const CART_TOTAL="CART_TOTAL";


export const getrequest=(payload)=>({
    type:GET_REQUEST,
    payload
});
export const getsuccess=(data)=>({
    type:GET_SUCCESS,
    payload:data
});
export const getfailure=(payload)=>({
    type:GET_FAILURE,
    payload
});

export const singlerequest=(payload)=>({
    type:SINGLE_REQUEST,
    payload
});
export const singlesuccess=(id)=>({
    type:SINGLE_SUCCESS,
    payload:id
});
export const singlefailure=(payload)=>({
    type:SINGLE_FAILURE,
    payload
});


export const cartrequest=(payload)=>({
    type:CART_REQUEST,
    payload
});
export const cartsuccess=(data)=>({
    type:CART_SUCCESS,
    payload:{...data,Price:data.Price}
});
export const cartfailure=(payload)=>({
    type:CART_FAILURE,
    payload
});

export const deleterequest=(payload)=>({
    type:DELETE_CART_REQUEST,
    payload
});
export const deletesuccess=(id)=>({
    type:DELETE_CART_SUCCESS,
    payload:id
});
export const deletefailure=(payload)=>({
    type:DELETE_CART_FAILURE,
    payload
});


 export const fetchcartrequest=(payload)=>({
    type:FETCH_CART_REQUEST,
    payload
});
export const fetchcartsuccess=(data)=>({
    type:FETCH_CART_SUCCESS,
    payload:data
});
export const fetchcartfailure=(payload)=>({
    type:FETCH_CART_FAILURE,
    payload
});

export const cartTotal=(payload)=>({
    type:CART_TOTAL,
    payload
});


export const getProductsdata=(payload)=>(dispatch)=>{
    dispatch(getrequest())
    axios({
        url:"http://localhost:3000/Products",
        method:"GET",
        params:{
            ...payload
        }
    }).then((res)=>{
          dispatch(getsuccess(res.data))
    }).catch((err)=>{
        dispatch(getfailure())
    })
};

export const Singledata=(id)=>(dispatch)=>{
    dispatch(singlerequest());
    axios({
      url:`http://localhost:3000/Products/${id}`,
      method:"GET"
    }).then((res)=>{
        dispatch(singlesuccess(res.data))
    }).catch((err)=>{
        dispatch(singlefailure())
    })
}



export const addproducts=(product)=>(dispatch)=>{
   dispatch(cartrequest())
   axios({
    url:"http://localhost:3000/Cart",
    method:"POST",
    data:{
        ...product
    }
  
   }).then((res)=>{
      dispatch(cartsuccess(res.data))

   })
   .catch((err)=>{
     dispatch(cartfailure(err))
   })
}
export const fetchcartdata=()=>(dispatch)=>{
    dispatch(fetchcartrequest());
    axios({
        url:"http://localhost:3000/Cart",
        method:"GET"
    }).then((res)=>{
        dispatch(fetchcartsuccess(res.data))
    }).catch((err)=>{
        dispatch(fetchcartfailure())
    })
}


export const deletecartitem=(Id)=>(dispatch)=>{
    dispatch(deleterequest())
    axios({
        url:`http://localhost:3000/Cart/${Id}`,
        method:"DELETE"
    }).then((res)=>{
        dispatch(deletesuccess(res.data))
    }).then((res)=>{
        dispatch(fetchcartdata())
    }).catch((er)=>{
        dispatch(deletefailure())
    })
}


