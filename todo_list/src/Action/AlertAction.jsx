
export const onSetAlert=(data)=>(dispatch)=>{
    console.log(data)
    dispatch({type:"ON_SET_ALERT", payload:data})
}