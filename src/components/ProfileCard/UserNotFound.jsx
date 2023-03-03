import styled from 'styled-components';
import { BiDizzy } from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--color-text);
  font-size: 2rem;

  & h3 {
    margin-top: 2rem;
  }
`;

const Icon = styled(BiDizzy)`
  font-size: 4rem;
`;

export default function UserNotFound() {
  return (
    <Wrapper>
      <Icon />
      <h3>User not found</h3>
    </Wrapper>
  );
}
