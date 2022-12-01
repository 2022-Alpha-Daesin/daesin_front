import { lazy, Suspense, useEffect } from "react";
import { WaveLoading } from "react-loadingg";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { useRefreshMutation } from "queries/auth";
import { useRecoilValue } from "recoil";
import { userInfo } from "states";
import { getCookie } from "cookies-next";

const ResponsiveLayout = lazy(() => import("layouts/responsive.layout"));
const Now = lazy(() => import("pages/Now/Now"));
const SignIn = lazy(() => import("pages/SignIn/SignIn"));
const SignUp = lazy(() => import("pages/Signup/SignUp"));
const Club = lazy(() => import("pages/Club/Club"));
const AD = lazy(() => import("pages/AD/AD"));
const ADArticle = lazy(() => import("pages/AD/ADArticle"));
const Review = lazy(() => import("pages/Review/Review"));
const ReviewDetail = lazy(() => import("pages/ReviewDetail/ReviewDetail"));
const MyPage = lazy(() => import("pages/MyPage/MyPage"));
// const ClubDetail = lazy(() => import('pages/Club/ClubDetail'));

const App = () => {
  const user = useRecoilValue(userInfo);
  const { mutate: refreshMutate } = useRefreshMutation();

  useEffect(() => {
    const refreshCookie = getCookie("refreshToken");
    const accessToken = getCookie("accessToken");
    if (refreshCookie && !accessToken) {
      refreshMutate();
    }
  }, []);
  return (
    <>
      <Router>
        <GlobalStyles />
        <Suspense fallback={<WaveLoading />}>
          <ResponsiveLayout>
            <Routes>
              <Route path="/" element={<Now />} />
              <Route
                path="/signin"
                element={user.isLoggedIn ? <Navigate replace to="/" /> : <SignIn />}
              />
              <Route
                path="/signup"
                element={user.isLoggedIn ? <Navigate replace to="/" /> : <SignUp />}
              />
              <Route path="/club" element={<Club />} />
              <Route path="/ad" element={<AD />} />
              <Route path="/ad/:id" element={<ADArticle />} />
              <Route path="/review" element={<Review />} />
              <Route path="/review/:id" element={<ReviewDetail />} />
              <Route
                path="/mypage"
                element={user.isLoggedIn ? <MyPage /> : <Navigate replace to="/signin" />}
              />
            </Routes>
          </ResponsiveLayout>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
