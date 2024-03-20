import 'src/global.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/Router';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
      <ToastContainer />
    </ThemeProvider>
  );
}
