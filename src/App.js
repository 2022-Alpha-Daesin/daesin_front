import { lazy, Suspense } from 'react';
import { WaveLoading } from 'react-loadingg';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';

const ResponsiveLayout = lazy(() => import('layouts/responsive.layout'));
const Searchbar = lazy(() => import('components/Navbar/Searchbar'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const SignUp = lazy(() => import('pages/Signup/SignUp'));

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<WaveLoading />}>
        <ResponsiveLayout>
          <Searchbar />
        </ResponsiveLayout>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
