import { lazy, Suspense, useTransition, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { useRefreshMutation, useUserInfoQuery } from "queries/auth";
import { useRecoilValue } from "recoil";
import { userInfo } from "states";
import { hasCookie } from "cookies-next";

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
const ClubDetail = lazy(() => import("pages/Club/ClubDetail"));

const App = () => {
  const [isPending, startTransition] = useTransition();
  const user = useRecoilValue(userInfo);
  const { mutate: refreshMutate } = useRefreshMutation();
  const { data, isLoading } = useUserInfoQuery();
  useEffect(() => {
    if (hasCookie("refreshToken") && !user.isLoggedIn && user.nickName === "") {
      refreshMutate();
    }
  }, [user]);
  return (
    <>
      <Router>
        <GlobalStyles />

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
            <Route path="/club/:id" element={<ClubDetail />} />
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
      </Router>
      <Toaster />
    </>
  );
};

export default App;
