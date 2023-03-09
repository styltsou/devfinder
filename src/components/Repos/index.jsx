import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useUserRepos } from '../../api';
import useSearch from '../../hooks/useSearch';

import Modal from '../UI/Modal';
import Spinner from '../UI/Spinner';
import RepoCard from './RepoCard';

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding-top: 1rem;
`;

const Paragraph = styled.p`
  color: var(--color-text);
  font-size: 2rem;
  padding: 1rem 0;
`;

function Repos({ isOpen, setIsOpen }) {
  const { searchTerm } = useSearch();

  const { isLoading, data: repos } = useUserRepos({
    userHandle: searchTerm,
    shouldFetch: isOpen,
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlexContainer>
          {repos.length ? (
            repos.map((repo, idx) => <RepoCard key={idx} repo={repo} />)
          ) : (
            <Paragraph>This user doesn't have any public repos.</Paragraph>
          )}
        </FlexContainer>
      )}
    </Modal>
  );
}

export default Repos;
