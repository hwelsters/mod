import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "hooks/useAuth";

import config from "data/config";
import pathURLs from "data/pageURLs";

// TEST
import { apiGet } from "services/api";
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Review from "pages/Review/Review";
import Poses from "pages/Poses/Poses";
import Profile from "pages/Profile/Profile";

const LazyHome = React.lazy(()=> import("pages/Home/Home"))
const LazyShop = React.lazy(()=>import("pages/Shop/Shop"))
const LazyReview = React.lazy(()=>import("pages/Review/Review"))
const LazyPoses = React.lazy(()=>import("pages/Poses/Poses"))
const LazyNotFound = React.lazy(()=> import("pages/NotFound/NotFound"))
const LazyLogin = React.lazy(()=> import("pages/Login/Login"))
const LazyRegister = React.lazy(()=> import("pages/Register/Register"))
const LazyYoga = React.lazy(()=> import("pages/Yoga/Yoga"))
const LazyLanding = React.lazy(()=> import("pages/Landing/Landing"))

function App() {
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
  async function test() {await console.log(await apiGet("api"))};
  test();
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* SET WEBSITE TITLE */}
        <title>{config.name} | {config.description}</title>
        <Routes>
          <Route path={pathURLs.home} element={<Home/>} />
          <Route path={pathURLs.profile} element={<Profile/>} />
          <Route path={pathURLs.shop} element={<Shop/>} />
          <Route path={pathURLs.review} element={<Review/>} />
          <Route path={pathURLs.poses} element={<Poses/>} />
          <Route path={pathURLs.login} element={<React.Suspense><LazyLogin /></React.Suspense>} />
          <Route path={pathURLs.register} element={<React.Suspense><LazyRegister /></React.Suspense>} />
          <Route path={pathURLs.yoga} element={<React.Suspense><LazyYoga /></React.Suspense>} />
          <Route path={pathURLs.landing} element={<React.Suspense><LazyLanding /></React.Suspense>} />
          <Route path="*" element={<React.Suspense><LazyNotFound /></React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
