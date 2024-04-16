import { Box, Button, Image, Text } from "@chakra-ui/react";
import Header from '../../components/Header/Header'
import { useTitle } from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate=useNavigate()
  useTitle("About | Blog app");

  return (
    <>
  
      <Header />
      <Button onClick={()=>navigate(-1)}> Back</Button>
      <Box p={50}>
        <Text fontSize="6xl" align="center">
          About us
        </Text>
        <Text fontSize="lg" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
        
        </Text>
      </Box>
    </>
  );
}

export default AboutPage;











// import { useNavigate } from 'react-router-dom';
// import { Button, Text } from '@chakra-ui/react';

// const About = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//             <Text color='teal' fontSize='6xl' size='lg' display='flex' justifyContent='center' alignItems='center' textAlign='center' textTransform='uppercase'>About</Text>
//       <Text color='black'  fontSize='2xl' size='lg' display='flex' justifyContent='center' alignItems='center' textAlign='center' textTransform='uppercase'>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptate hic dolore exercitationem error mollitia id eaque veritatis voluptatum rerum ratione doloremque, aliquam minus odio fugiat sint officiis in qui?</p>
//       </Text>

//       <Button onClick={() => navigate(-1)} color='teal'>Back</Button>
//     </div>
//   );
// };

// export default About;
