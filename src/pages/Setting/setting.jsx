import { useState } from 'react';
import Header from '../../components/Header/Header';

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Image,
  IconButton,
  ButtonGroup,
  useDisclosure,
  Button,
  TableContainer,
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constant/router';
import {useFetchData} from '../../hooks/useFetchData'
import {getBlogs, rmvBlogId } from '../../services/articles'
import {shortText} from '../../utills/shortText'
import { toast } from "react-toastify";


function SettingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();



  const { data, loading, setData } = useFetchData({
    requestFn: () => getBlogs(),
  });
  const [currentItem, setCurrentItem] = useState();

 
  
  const handleRemove = async () => {
    try {
      // toast.success("Success");

      // const resData = await rmvBlogId(currentItem?.id);
      await rmvBlogId(currentItem?.id);

      const newFilter = data?.filter((item) => item.id != currentItem?.id);
      setData(newFilter);

      toast({
        title: "Blog deleted.",
        // description: "We've created your account for you.",
        status: "success",
        colorScheme: "teal",
        duration: 2000,
        isClosable: true,
      });

      onClose();
    } catch (err) {
      toast({
        title: err?.message,
        // description: "",
        status: "error",
        colorScheme: "red",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Header />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Article</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Lorem ipsum</ModalBody>

          <ModalFooter>
            <Button
              variant='ghost'
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              colorScheme='red'
              onClick={handleRemove}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        py={100}
        px={160}
      >
        <Text
          align={'center'}
          fontWeight={600}
          fontSize='6xl'
        >
          Setting
        </Text>

        <TableContainer>
          <Table colorScheme='whatsapp'>
            <Thead>
              <Tr>
                <Th>Cover url</Th>
                <Th>Title</Th>
                <Th colSpan={2}>Desc</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Image
                    width={10}
                    height={10}
                    borderRadius={10}
                    objectFit={'cover'}
                    src='https://www.20i.com/blog/wp-content/uploads/2020/10/I-love-JavaScript.png'
                  />
                </Td>
                <Td>JAvascript better</Td>
                <Td>Lorem ipsum....</Td>
                <Td>
                  <ButtonGroup>
                    <IconButton
                      colorScheme='teal'
                      onClick={() =>
                        navigate(ROUTER.ARTICLE_CREATE + `?blog_id=${312312}`)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      colorScheme='red'
                      onClick={onOpen}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ButtonGroup>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Image
                    width={10}
                    height={10}
                    borderRadius={10}
                    objectFit={'cover'}
                    src='https://www.20i.com/blog/wp-content/uploads/2020/10/I-love-JavaScript.png'
                  />
                </Td>
                <Td>JAvascript better</Td>
                <Td>Lorem ipsum....</Td>
                <Td>
                  <ButtonGroup>
                    <IconButton colorScheme='teal'>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      colorScheme='red'
                      onClick={onOpen}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ButtonGroup>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default SettingPage;
