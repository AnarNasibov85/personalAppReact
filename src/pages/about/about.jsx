import {useNavigate} from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react'
const About = () => {
    const navigate=useNavigate()
  return (
    <div>
       

<Text
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
About
</Text>
<Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}

export default About
