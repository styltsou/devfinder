import React, { useState } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import useSearch from '../hooks/useSearch';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  padding: 0.8rem 1rem;
  background-color: var(--color-card-background);
  border-radius: 0.7rem;
  box-shadow: var(--shadow);
`;

const SearchIcon = styled(GoSearch)`
  color: var(--color-primary);
  font-size: 2.7rem;
  margin-right: 1.5rem;
  line-height: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  font-size: 1.7rem;
  color: var(--color-text);
  border: none;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  justify-self: flex-end;
  color: #fff;
  background-color: var(--color-primary);
  border: none;
  padding: 1.5rem 2.5rem;
  font-size: 1.6rem;
  border-radius: 0.7rem;
`;

function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearch();

  const [searchInputValue, setSearchInputValue] = useState(searchTerm);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm(searchInputValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInputWrapper>
        <SearchIcon />
        <Input
          type="text"
          value={searchInputValue}
          onChange={e => setSearchInputValue(e.target.value)}
          placeholder="Search Github username..."
        />
      </SearchInputWrapper>
      <Button>Search</Button>
    </Form>
  );
}

export default SearchBar;
