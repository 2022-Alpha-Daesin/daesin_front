import { lazy, Suspense } from 'react';
import { WaveLoading } from 'react-loadingg';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('components/Navbar/DesktopNavbar'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<WaveLoading />}>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
