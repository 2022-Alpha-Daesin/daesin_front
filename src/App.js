import { lazy, Suspense } from "react";
import { WaveLoading } from "react-loadingg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import { AxiosInterceptor } from "./apis/config";
import { Toaster } from "react-hot-toast";

const ResponsiveLayout = lazy(() => import("layouts/responsive.layout"));
const Now = lazy(() => import("pages/Now/Now"));
const SignIn = lazy(() => import("pages/SignIn/SignIn"));
const SignUp = lazy(() => import("pages/Signup/SignUp"));
const Club = lazy(() => import("pages/Club/Club"));
const AD = lazy(() => import("pages/AD/AD"));
const Review = lazy(() => import("pages/Review/Review"));
// const ClubDetail = lazy(() => import('pages/Club/ClubDetail'));

const App = () => {
  return (
    <>
      <Router>
        <AxiosInterceptor>
          <GlobalStyles />
          <Suspense fallback={<WaveLoading />}>
            <ResponsiveLayout>
              <Routes>
                <Route path="/" element={<Now />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/club" element={<Club />} />
                <Route path="/ad" element={<AD />} />
                <Route path="/review" element={<Review />} />
              </Routes>
            </ResponsiveLayout>
          </Suspense>
        </AxiosInterceptor>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
