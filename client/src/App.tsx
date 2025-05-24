import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

import Blank from "./pages/OtherPage/Blank";
import Home from "./pages/User/Home";
import Address from "./pages/User/Address";
import ProductDetails from "./pages/User/PackageDetails";
import FillDetails from "./pages/User/FillDetails";
import EventDetails from "./pages/User/EventDetails";
import AccountDetails from "./pages/User/AccountDetails";
import Profile from "./pages/User/Profile";
import AboutUs from "./pages/User/AboutUs";

import UserLayout from "./layout/UserLayout";
import Banner from "./pages/Admin/Banner";
import AddOnes from "./pages/Admin/AddOnes";
import FoodPackagesScreen from "./pages/User/Packages";
import Intro from "./pages/User/Intro";

// Lazy loaded admin pages
const Categories = lazy(() => import("./pages/Admin/Categories"));
const Products = lazy(() => import("./pages/Admin/Products"));
const Packages = lazy(() => import("./pages/Admin/Packages"));
const Chairs = lazy(() => import("./pages/Admin/Chairs"));
const Tables = lazy(() => import("./pages/Admin/Tables"));
const LiveFoodStation = lazy(() => import("./pages/Admin/LiveFoodStation"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Dashboard Layout */}
        <Route path="/admin" element={<AppLayout />}>
          <Route path="blank" element={<Blank />} />
          <Route
            path="categories"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Categories />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="packages"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Packages />
              </Suspense>
            }
          />
          <Route
            path="chairs"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Chairs />
              </Suspense>
            }
          />
          <Route
            path="tables"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tables />
              </Suspense>
            }
          />
          <Route
            path="live-foodstation"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LiveFoodStation />
              </Suspense>
            }
          />
          <Route
            path="addones"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AddOnes />
              </Suspense>
            }
          />
          <Route
            path="banner"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Banner />
              </Suspense>
            }
          />
        </Route>

        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Intro/>} />
          <Route path="address" element={<Address />} />
          <Route path="home" element={<Home/>} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="fill-details" element={<FillDetails />} />
          <Route path="event-details" element={<EventDetails />} />
          <Route path="account-details" element={<AccountDetails />} />
          <Route path="my-profile" element={<Profile />} />
          <Route path="packages" element={<FoodPackagesScreen />} />
           
          <Route path="about-us" element={<AboutUs />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
