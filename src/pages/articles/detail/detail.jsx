import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Header from '../../../components/Header/Header';

import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';
import { getBlogId } from '../../../services/articles';
import Loading from '../../../components/Loading/loading';
import { convertTime } from '../../../utills/convertTime';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
// import { useGlobalStore } from '../../../Store/Global/GlobalProvider';
// import { TYPES } from '../../../Store/Global/type';
import NavigationShow from '../../../components/NavigationShow/NavigationShow';
import { useTitle } from '../../../hooks/useTitle';
import { useSelector } from 'react-redux';
import { toggleFavorite } from '../../../redux/global/globalSlice';
import { useDispatch } from 'react-redux';

function ArticleDetailPage() {
  const { id } = useParams();
  const favorites = useSelector((state) => state.global.favorites);

  const dispatch = useDispatch();

  // const { dispatch } = useGlobalStore();

  const { data, loading } = useFetchData({
    requestFn: () => getBlogId(id),
    dependecy: [id],
  });

  useTitle(`${data?.title} | Blog app`);

  const isFav = favorites.find((item) => item.id == id);

  const handleToggleFav = async () => {
    dispatch(toggleFavorite({id, data }));
  };

  return (
    <>
      <Header />
      <NavigationShow routes={['Articles', data?.title]} />
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid
          bg='gray.50'
          columns={{ sm: 2 }}
          spacing='2'
          p='10'
        >
          <Box>
            <Image
              src={data?.cover_url}
              alt={data?.title}
            />
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            gap='16px'
          >
            <Text
              bgClip='text'
              fontSize='md'
              fontWeight='medium'
              color='gray'
            >
              {convertTime(parseInt(data?.time))}
            </Text>
            <Text
              bgClip='text'
              fontSize='2xl'
              fontWeight='extrabold'
              color='black'
            >
              {data?.title}
            </Text>

            <Text
              bgClip='text'
              fontSize='lg'
              fontWeight='medium'
              color='gray'
            >
              {data?.desc}
            </Text>
            <Button
              alignSelf='flex-start'
              leftIcon={isFav ? <MinusIcon /> : <AddIcon />}
              colorScheme={isFav ? 'red' : 'teal'}
              onClick={handleToggleFav}
            >
              {isFav ? 'Remove' : 'Add'} Favorites
            </Button>
          </Box>
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticleDetailPage;
