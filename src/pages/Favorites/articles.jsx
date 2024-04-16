import { useNavigate } from 'react-router-dom';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import BlogCard from '../../components/BlogCard/BlogCard';
import NavigationShow from '../../components/NavigationShow/NavigationShow';
import { useSelector } from 'react-redux';

// import { useGlobalStore } from '../../Store/Global/GlobalProvider';

const FavPage = () => {
  const navigate = useNavigate();

const favorites=useSelector((state)=>state.global?.favorites)
  return (
    <div>
      <Header />
      <Box px={50}>
        <NavigationShow routes={[' favorites']} />
      </Box>

      <SimpleGrid
        columns={{ sm: 3 }}
        spacing='10'
      >
        {favorites
          ?.filter((item, index) => item.id > 100)
          ?.map((item) => (
            <BlogCard
              key={'blog-id' + item.id}
              {...item}
              onReadMore={() => navigate('/articles/' + item.id)}
            />
          ))}
        {/* <BlogCard />
 
    <BlogCard /> */}
      </SimpleGrid>
    </div>
  );
};

export default FavPage;
