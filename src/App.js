import { lazy, Suspense } from 'react';
import { WaveLoading } from 'react-loadingg';

const Navbar = lazy(() => import('components/Navbar/DesktopNavbar'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<WaveLoading />}>
        <Navbar />
      </Suspense>
    </div>
  );
};

export default App;
