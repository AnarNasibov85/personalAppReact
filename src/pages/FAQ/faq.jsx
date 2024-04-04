import { Button } from '@chakra-ui/react'

import {useNavigate} from 'react-router-dom'
const FAQ = () => {
    const navigate= useNavigate()
  return (
    <div>
        FAQ
      <Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}

export default FAQ;
