import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

import Blank from "./pages/OtherPage/Blank";
import Home from "./pages/User/Home";


import UserLayout from "./layout/UserLayout";
import Banner from "./pages/Admin/Banner";
import AddOnes from "./pages/Admin/AddOnes";
import Intro from "./pages/User/Intro";
import PackageExplore from "./pages/User/PackageExplore";

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
                <Route path="/" element={<Intro />} />
                <Route
                    path="/home"
                    element={
                        <UserLayout>
                            <Home />
                        </UserLayout>
                    }
                />
                <Route
                    path="/package"
                    element={
                        <UserLayout>
                            <PackageExplore />
                        </UserLayout>
                    }
                />

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
