import styled, { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { SearchContextProvider } from './context/SearchContext';
import useDarkMode from './hooks/useDarkMode';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import ModalButtons from './components/ModalButtons';
import withDarkModeProvider from './hoc/withDarkModeProvider';

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-background);
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90rem;
`;

const queryClient = new QueryClient();

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <SearchContextProvider>
          <BackgroundContainer>
            <Wrapper>
              <Header />
              <SearchBar />
              <ProfileCard />
              <ModalButtons />
            </Wrapper>
          </BackgroundContainer>
        </SearchContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default withDarkModeProvider(App);
