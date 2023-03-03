import styled from 'styled-components';
import useDarkMode from '../../hooks/useDarkMode';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const FlexContainer = styled.header`
  width: 100%;
  display: flex;
  flex-diretion: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 7rem;
`;

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <FlexContainer>
      <Logo />
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
    </FlexContainer>
  );
}

export default Header;
