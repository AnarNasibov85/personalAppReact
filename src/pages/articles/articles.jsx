import { useNavigate } from 'react-router-dom';
import {
  Button,

  SimpleGrid,
 
} from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import BlogCard from '../../components/BlogCard/BlogCard';
import NavigationShow from '../../components/NavigationShow/NavigationShow';
import { useEffect, useState } from 'react';
import { getBlogs } from '../../services/articles';
import { useFetchData } from '../../hooks/useFetchData';
import Loading from '../../components/Loading/loading';
import InputSearch from '../../components/InputSearch/InputSearch';
import { useTitle } from '../../hooks/useTitle';

const Articles = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState();

  const { data, loading } = useFetchData({
    requestFn: () => getBlogs(),
  });

  useEffect(() => {
    setSearchData(data);
  }, [data]);
  useTitle(`Articles | Blog app`);
  const handleSearch = (text) => {
    if (!text.trim()) {
      setSearchData(data);
      return;
    }
    const filterData = data.filter((item) =>
      // item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      new RegExp(text,'i').test(item.title)
    );

    console.log('text', text);
    setSearchData(filterData);
  };
  
  return (
    <div>
      <Header />
      <Button onClick={() => navigate(-1)}>Back</Button>
      <NavigationShow />
      <InputSearch onFocus={()=>setSearchData(data)} onSearch={handleSearch} />
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid
          columns={{ sm: 3 }}
          spacing='10'
        >
          {searchData
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
      )}
    </div>
  );
};

export default Articles;
