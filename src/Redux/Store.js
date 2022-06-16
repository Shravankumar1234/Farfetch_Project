import { ProductsReducer } from "./Pages_redux/ProductsReducer";
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";

const rootReducer=combineReducers({ProductsData:ProductsReducer});
 
export const Store=legacy_createStore(rootReducer,applyMiddleware(thunk))