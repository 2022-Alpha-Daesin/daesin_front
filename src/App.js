import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { WaveLoading } from "react-loadingg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import { AxiosInterceptor } from "./apis/config";
import userRelatedAPI from "apis/userRelatedAPI";

const ResponsiveLayout = lazy(() => import("layouts/responsive.layout"));
const Now = lazy(() => import("pages/Now/Now"));
const SignIn = lazy(() => import("pages/SignIn/SignIn"));
const SignUp = lazy(() => import("pages/Signup/SignUp"));
const Club = lazy(() => import("pages/Club/Club"));
const AD = lazy(() => import("pages/AD/AD"));
// const ClubDetail = lazy(() => import('pages/Club/ClubDetail'));

const App = () => {
  const confirmEmail = async (emailVerifyToken) => {
    await userRelatedAPI
      .verifyEmail({ key: emailVerifyToken })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let URL = document.location.pathname.split("/");
    if (URL) {
      const emailVerifyToken = URL[URL.length - 1];
      confirmEmail(emailVerifyToken);
    }
  }, []);
  return (
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
            </Routes>
          </ResponsiveLayout>
        </Suspense>
      </AxiosInterceptor>
    </Router>
  );
};

export default App;
