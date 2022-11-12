import { lazy, Suspense } from 'react';
import { WaveLoading } from 'react-loadingg';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import { AxiosInterceptor } from './apis/config';

const ResponsiveLayout = lazy(() => import('layouts/responsive.layout'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const SignUp = lazy(() => import('pages/Signup/SignUp'));
const Club = lazy(() => import('pages/Club/Club'));

const App = () => {
  return (
    <Router>
      <AxiosInterceptor>
        <GlobalStyles />
        <Suspense fallback={<WaveLoading />}>
          <ResponsiveLayout>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/club" element={<Club />} />
            </Routes>
          </ResponsiveLayout>
        </Suspense>
      </AxiosInterceptor>
    </Router>
  );
};

export default App;
