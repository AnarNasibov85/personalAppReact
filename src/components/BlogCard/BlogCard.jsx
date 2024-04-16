import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { shortText } from '../../utills/shortText';
import { categories } from '../../constant/Categories';

const BlogCard = ({ title, cover_url, desc, onReadMore, category }) => {
  
  const blogCategory = categories.find((item) => item.id === category) || {
    title: 'Default Category',
  };

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
     
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={cover_url}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading
            size='sm'
            color='green'
          >
            Category: {blogCategory.title}
          </Heading>
          <Heading
            size='md'
            py='2'
          >
            {title}
          </Heading>
          <Text>{shortText(desc, 80)}</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant='solid'
            colorScheme='teal'
            onClick={onReadMore}
          >
            Read more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default BlogCard;
