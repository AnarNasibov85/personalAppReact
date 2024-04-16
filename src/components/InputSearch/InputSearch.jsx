import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const InputSearch = ({ onSearch, onFocus }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    onSearch(search);
  };

  return (
    <Box px={50}>
      <Box
        display='flex'
        alignItems='center'
        gap={4}
      >
        <Input
          onFocus={onFocus}
          value={search}
          placeholder='search'
          onChange={(e) => setSearch(e.target.value)}
          px={50}
        />
        <Button
          colorScheme='green'
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default InputSearch;
