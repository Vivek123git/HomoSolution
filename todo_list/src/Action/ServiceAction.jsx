import { commonAxios } from "../components/CommonAxios"
import axios from "axios"

const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

export const onBookingServiceman=(data)=>(dispatch,getState)=>{
    commonAxios("",data,dispatch)
    .then((res)=>{
        if(res.status){
            console.log("success")
        }else{
            console.log("failure")
        }
    })
    .catch((err)=>{
        console.log(err.msg)
    })
}

export const onCreateServiceman=(data)=>(dispatch,getState)=>{
    commonAxios("",data,dispatch)
    .then((res)=>{
        if(res.status){
            console.log("success")
        }else{
            console.log("failure")
        }
    })
    .catch((err)=>{
        console.log(err.msg)
    })
}

export const onFetchServices=(setService,data)=>(dispatch,getState)=>{
    axios.get("https://onehomesolution.000webhostapp.com/fetch-service",data,dispatch,{options})
    .then((res)=>{
        if(res.status){
            console.log("success")
            setService(res.data.data)
        }
    })
    .catch((err)=>{
        console.log(err.msg)
    })
}