import { commonAxios } from "../components/CommonAxios"

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