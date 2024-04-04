import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  SimpleGrid,
  Stack,
  Center,
  Spinner,
  Box,
} from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import BlogCard from '../../components/BlogCard/BlogCard';
import NavigationShow from '../../components/NavigationShow/NavigationShow';
// import { useEffect, useState } from 'react';
import { getBlogs } from '../../services/articles';
import { useFetchData } from '../../hooks/useFetchData';
import Loading from '../../components/Loading/loading';

const Articles = () => {
  const navigate = useNavigate();
  const { data, loading } = useFetchData({
    requestFn: () => getBlogs(),
  });

  return (
    <div>
      <Header />
      {/* <Button onClick={() => navigate(-1)}>Back</Button> */}
      <NavigationShow />
   
  
      {loading ? (
      <Loading/>
      ) : (
        <SimpleGrid
          columns={{ sm: 3 }}
          spacing='10'
        >
          {data
            ?.filter((item, index) => index > 99)
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
      )}
    </div>
  );
};

export default Articles;
