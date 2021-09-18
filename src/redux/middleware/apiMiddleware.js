import axios from "axios";
import { apiCallStart,apiCallSuccess,apiCallFailed } from "./apiActions";


const apiMiddleware = ({dispatch}) => (next) => async(action)=>{
    if(action.type !== apiCallStart.type) return next(action);

    const {url,method,data,onStart,onSuccess,onError} = action.payload;
    if(onStart){
        dispatch({type:onStart});
    }

    next(action);
    // https://kitsu.io/api/edge 
    try{
        //make api call and get response data
        const response = await axios.request({
            baseURL:"https://api.aniapi.com",
            url,
            method,
            data,
        });

        //dispatch on success action from the reducer/slices
        if(onSuccess){
            dispatch({type:onSuccess,payload:response.data});
        }
    }
    catch(error){
        //dispatch on error if the api request was failed 
        if(onError){
            dispatch({type:onError ,payload:error.message});
        }
    }
}

export default apiMiddleware;

