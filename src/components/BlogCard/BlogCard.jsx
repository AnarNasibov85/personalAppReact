import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { shortText } from '../../utills/shortText';

const BlogCard = ({ title, cover_url, desc, onReadMore }) => {
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={cover_url}
            alt={title}
            borderRadius='lg'
          />
          <Stack
            mt='6'
            spacing='3'
          >
            <Heading size='md'>{title}</Heading>
            <Text>{shortText(desc,60)}</Text>
            {/* <Text color='blue.600' fontSize='2xl'>
        $450
      </Text> */}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button
              variant='solid'
              colorScheme='teal'
              onClick={onReadMore}
            >
              Read More
            </Button>
            {/* <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button> */}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
