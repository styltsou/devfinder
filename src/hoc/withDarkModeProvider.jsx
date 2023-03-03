import { DarkModeContextProvider } from '../context/DarkModeContext';

const withDarkModeProvider = Component => props =>
  (
    <DarkModeContextProvider>
      <Component {...props} />
    </DarkModeContextProvider>
  );

export default withDarkModeProvider;
