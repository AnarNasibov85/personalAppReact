
import { Badge, Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";
import { useSelector } from 'react-redux'; 

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = (p) => (pathname === p ? "orange" : "white"); 
  const favorites = useSelector((state) => state.global?.favorites || []);

  const favCount = favorites.length; 

  return (
    <Box
      height="100px"
      p="12px"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      backgroundColor="green"
    >
      <Text as="h1" fontSize="4xl" color="white">
        Blog
      </Text>

      <Stack direction="row" spacing={4} align="center" as="ul">
        <Button
          variant="ghost"
          color="white"
          as="li"
          color={isActive(ROUTER.HOME)}
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          color="white"
          as="li"
          color={isActive(ROUTER.ARTICLES)}
          onClick={() => navigate(ROUTER.ARTICLES)}
        >
          Articles
        </Button>
        <Button
          variant="ghost"
          as="li"
          color="white"
          color={isActive(ROUTER.ABOUT)}
          onClick={() => navigate(ROUTER.ABOUT)}
        >
          About
        </Button>
        <Button
          variant="ghost"
          color="white"
          as="li"
          color={isActive(ROUTER.FAQ)}
          onClick={() => navigate(ROUTER.FAQ)}
        >
          FAQ
        </Button>
        <Button
          variant="ghost"
          color="white"
          as="li"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          color={isActive(ROUTER.FAV)}
          onClick={() => navigate(ROUTER.FAV)}
        >
          Favorites
          {!!favCount && (
            <Badge variant='solid' colorScheme="red">
              {favCount}
            </Badge>
          )}
        </Button>
        <ButtonGroup>
          <Button onClick={() => navigate(ROUTER.ARTICLES_CREATE)} as="button">
            Create
          </Button>
          <Button onClick={() => navigate(ROUTER.SETTING)} as="button">
            Setting
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

export default Header;






// import { Badge, Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";

// import { useLocation, useNavigate } from "react-router-dom";
// import { ROUTER } from "../../constant/router";
// import { useGlobalStore } from "../../Store/Global/GlobalProvider";

// function Header() {
//   const navigate = useNavigate();
//   const {state}=useGlobalStore()
//   const {pathname} =useLocation()
//   const isActive = (p) => (pathname == p ? "orange" : "white");
//   const favCount=state.favorites?.length


//   return (
//     <Box
//       height="100px"
//       p="12px"
//       alignItems="center"
//       display="flex"
//       justifyContent="space-between"
//       backgroundColor="green"
//     >
//       <Text as="h1" fontSize="4xl" color="white">
//         Blog
//       </Text>

//       <Stack direction="row" spacing={4} align="center" as="ul">
//         <Button
//           variant="ghost"
//           color="white"
//           as="li"
//           color={isActive(ROUTER.HOME)}
//           onClick={() => navigate(ROUTER.HOME)}
//         >
//           Home
//         </Button>
//         <Button
//           variant="ghost"
//           color="white"
//           as="li"
//           color={isActive(ROUTER.ARTICLES)}
//           onClick={() => navigate(ROUTER.ARTICLES)}
//         >
//           Articles
//         </Button>
//         <Button
//           variant="ghost"
//           as="li"
//           color="white"
//           color={isActive(ROUTER.ABOUT)}
//           onClick={() => navigate(ROUTER.ABOUT)}
//         >
//           About
//         </Button>
//         <Button
//           variant="ghost"
//           color="white"
//           as="li"
//           color={isActive(ROUTER.FAQ)}
//           onClick={() => navigate(ROUTER.FAQ)}
//         >
//           FAQ
//         </Button>
//         <Button
//           variant="ghost"
//           color="white"
//           as="li"
//           // eslint-disable-next-line react/jsx-no-duplicate-props
//           color={isActive(ROUTER.FAV)}
//           onClick={() => navigate(ROUTER.FAV)}
//         >
//           Favorites
//           {!!favCount && (
//           <Badge variant='solid' colorScheme="red">
// {favCount}
//           </Badge>
//           )}
//         </Button>
//         <ButtonGroup>
//         <Button onClick={() => navigate(ROUTER.ARTICLES_CREATE)} as="button">
//           Create
//         </Button>
//         <Button onClick={() => navigate(ROUTER.SETTING)} as="button">
//           Setting
//         </Button>
//       </ButtonGroup>
//       </Stack>
//     </Box>
//   );
// }

// export default Header;