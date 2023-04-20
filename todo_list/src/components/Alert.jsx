import React from 'react'
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';


const Alert1 = () => {

    const alert = useSelector(state=>state.Alert)
    console.log(alert,"alert")

  return (
    <div>
        <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default Alert1