import { lazy, Suspense, useEffect } from "react";
import { WaveLoading } from "react-loadingg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { useRefreshMutation } from "queries/auth";
import { useRecoilValue, useResetRecoilState } from "recoil";
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
  const resetUser = useResetRecoilState(userInfo);
  const { mutate: refresMutate } = useRefreshMutation();

  useEffect(() => {
    const refreshCookie = getCookie("refreshToken");
    if (refreshCookie) {
      if (!user.isLoggedIn) {
        refresMutate();
      }
    } else {
      resetUser();
    }
  });

  return (
    <>
      <Router>
        <GlobalStyles />
        <Suspense fallback={<WaveLoading />}>
          <ResponsiveLayout>
            <Routes>
              <Route path="/" element={<Now />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/club" element={<Club />} />
              <Route path="/ad" element={<AD />} />
              <Route path="/ad/:id" element={<ADArticle />} />
              <Route path="/review" element={<Review />} />
              <Route path="/review/1" element={<ReviewDetail />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </ResponsiveLayout>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
