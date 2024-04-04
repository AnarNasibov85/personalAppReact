import React from 'react'
import {  Button, Text } from "@chakra-ui/react"
import {useNavigate} from  "react-router-dom";
const Notfound = () => {
  const navigate= useNavigate()
  return (
    <div>
404 PAGE
<Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}

export default Notfound
