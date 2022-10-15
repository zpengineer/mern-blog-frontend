import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const SearchPostForm = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const handleSearchQuery = e => {
    const searchQuery = e.target.value.trim().toLowerCase();

    setQuery(searchQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: query });

    setQuery('');
  };

  return (
    <>
      <FormControl as="form" width="300px" onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            placeholder="Search post..."
            size="md"
            type="text"
            name="searchQuery"
            value={query}
            onChange={handleSearchQuery}
          />
          <InputRightElement h={'full'}>
            <Button variant="ghost" type="submit" p={0}>
              <FiSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default SearchPostForm;
