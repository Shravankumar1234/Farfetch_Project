import { GET_REQUEST,GET_SUCCESS,GET_FAILURE,SINGLE_REQUEST,SINGLE_SUCCESS,SINGLE_FAILURE,CART_REQUEST,CART_SUCCESS,CART_FAILURE } from "./Action";
import { FETCH_CART_REQUEST,FETCH_CART_SUCCESS,FETCH_CART_FAILURE,DELETE_CART_FAILURE,DELETE_CART_REQUEST,DELETE_CART_SUCCESS } from "./Action";
const initstate={
    Loading:false,
    products:[],
    currentproduct:{},
    Cart:[],
    Error:false,
    total:0
}

export const ProductsReducer=(state=initstate,action)=>{
    switch(action.type){
        case GET_REQUEST:
            return{
                ...state,
                Loading:true,
                Error:false
            }
            case GET_SUCCESS:
                return{
                    ...state,
                    Loading:false,
                    products:action.payload,
                    Error:false
                }
            case GET_FAILURE:
                return{
                    Loading:false,
                    Error:true
                }
            case SINGLE_REQUEST:
            return{
                
                Loading:true,
                Error:false
            }
            case SINGLE_SUCCESS:
                return{
                    ...state,
                    Loading:false,
                    currentproduct:action.payload,
                    Error:false
                }
            case SINGLE_FAILURE:
                return{
                    Loading:false,
                    Error:true
                }
            case CART_REQUEST:
            return{
                
                Loading:true,
                Error:false
            }
            case CART_SUCCESS:
               let data=[...state.Cart,action.payload]
               let sum=action.payload.Price
              

                return{
                       ...state,
                    Loading:false,
                    total:sum,
                    Cart:data,
                    Error:false
                }
            case CART_FAILURE:
                return{
                    Loading:false,
                    Error:true
                }
             case FETCH_CART_REQUEST:
            return{
                
                Loading:true,
                Error:false
            }
            case FETCH_CART_SUCCESS:
                return{
                    ...state,
                    Loading:false,
                    Cart:[...action.payload],
                    Error:false
                }
            case FETCH_CART_FAILURE:
                return{
                    Loading:false,
                    Error:true
                }
             case DELETE_CART_REQUEST:
            return{
                
                Loading:true,
                Error:false
            }
            case DELETE_CART_SUCCESS:
                return{
                    ...state,
                    Loading:false,
                    currentproduct:action.payload,
                    Error:false
                }
            case DELETE_CART_FAILURE:
                return{
                    Loading:false,
                    Error:true
                }
            default:
                return state
    }

}