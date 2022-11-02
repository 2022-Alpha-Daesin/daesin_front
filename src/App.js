import { lazy, Suspense } from 'react';
import { WaveLoading } from 'react-loadingg';
import GlobalStyles from 'styles/GlobalStyles';

const ResponsiveLayout = lazy(() => import('layouts/responsive.layout'));
const Searchbar = lazy(() => import('components/Navbar/Searchbar'));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<WaveLoading />}>
        <ResponsiveLayout>
          <Searchbar />
        </ResponsiveLayout>
      </Suspense>
    </>
  );
};

export default App;
