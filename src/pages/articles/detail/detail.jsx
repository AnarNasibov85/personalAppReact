import { Box,  Button,  Image, SimpleGrid, Text } from '@chakra-ui/react';
import Header from '../../../components/Header/Header';

import {  useParams,useNavigate } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';
import { getBlogId } from '../../../services/articles';
import Loading from '../../../components/Loading/loading';
import { convertTime } from '../../../utills/convertTime';
const ArticleDetailPage = () => {
  const { id } = useParams();
  console.log('a',id);

  const { data, loading } = useFetchData({
    requestFn: () => getBlogId(id),
    dependecy: [id],
  });

  const navigate = useNavigate();

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        data && (
          <SimpleGrid
            columns={{ sm: 2 }}
            spacing='8'
            p='10'
          >
            <Box>
              <Image
                src={data?.cover_url}
                alt={data?.title}
              />
            </Box>
            
            <Box>
              <Text
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                color='black'
              >
                <Text bgClip='text' fontSize='md' fontWeight='medium' color='gray'>
             {convertTime (parseInt(data?.created))}
            </Text>
                {data?.title}
              </Text>
             
              <Text
                bgClip='text'
                fontSize='2xl'
                fontWeight='medium'
                color='black'
              >
                {data?.desc}
              </Text>
              <Button
                colorScheme='teal'
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </Box>
          </SimpleGrid>
        )
      )}
    </>
  );
};

export default ArticleDetailPage;
