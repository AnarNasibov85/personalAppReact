import React from 'react'
import {  Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react"
import Header from '../../components/Header/Header'
import {useNavigate} from 'react-router-dom'
import { ROUTER } from '../../constant/router'
const HomePage = () => {
  const navigate=useNavigate()
  return (
    <>
   <Header/>
<SimpleGrid  columns={{sm:2}} spacing='8' p='10'>
  

{/* <Box display='flex' p='50px' justifyContent='space-between'> */}
<Box >
<Text
  // bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
  color='black'
>
WELCOME TO MY WEBSITE!
</Text>
<Text
  // bgGradient="linear(to-l, #7928CA, #FF0080)"
 
  bgClip="text"
  fontSize="2xl"
  fontWeight="medium"
  color='black'
>
You can easily travel the whole world with us, book hotels and tickets in advance, our main goal is to satisfy all our customers. Our priority is always to make our work better!
</Text>
<Button backgroundColor='green'onClick={()=>navigate(ROUTER.ARTICLES_CREATE)}>Get Started</Button>
</Box>
<Box >
  <Image  src='https://static.octoparse.com/en/20230412122755896-scaled.jpg'/>
</Box>

{/* </Box> */}
</SimpleGrid>
    </>
  )
}

export default HomePage
