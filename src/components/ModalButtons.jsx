import React, { useState } from 'react';
import styled from 'styled-components';

import Followers from './Followers/Followers';
import Repos from './Repos';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

const Button = styled.button`
  color: var(--color-primary);
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  font-size: 1.5rem;
  transition: all 0.1s ease-in;

  &:hover {
    color: #fff;
    background-color: var(--color-primary);
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

function ButtonsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState('repos');

  const handleClick = e => {
    setIsOpen(prevState => !prevState);
    setModalId(e.target.id);
  };

  return (
    <>
      <FlexContainer>
        <Button id="repos" onClick={handleClick}>
          Repos
        </Button>
        <Button id="followers" onClick={handleClick}>
          Followers
        </Button>
        <Button id="following" onClick={handleClick}>
          Following
        </Button>
      </FlexContainer>
      <Repos isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default ButtonsModal;
