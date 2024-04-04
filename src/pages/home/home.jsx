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
Welcome to  our website!
</Text>
<Text
  // bgGradient="linear(to-l, #7928CA, #FF0080)"
 
  bgClip="text"
  fontSize="2xl"
  fontWeight="medium"
  color='black'
>
Here you can find information about the company and its services. You will also be able to make an 
Here you can find information about the company and its services. You will also be able to make an
</Text>
<Button backgroundColor='#6B46C1'onClick={()=>navigate(ROUTER.ARTICLES_CREATE)}>Get Started</Button>
</Box>
<Box >
  <Image  src='https://www.needgrammar.com/res/imgs/Articles-in-English.jpg'/>
</Box>

{/* </Box> */}
</SimpleGrid>
    </>
  )
}

export default HomePage
