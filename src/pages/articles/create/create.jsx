
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const ArticleCreatePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      ArticleCreatePage
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default ArticleCreatePage;
