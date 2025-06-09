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
import AllPackages from "./pages/User/Packages";
import FoodStation from "./components/user/FoodStation/FoodStation";
import Addons from "./pages/User/Addons";
import Seating from "./pages/User/Tables";
import FillDetails from "./pages/User/FillDetails";
import Address from "./pages/User/Address";
import Success from "./pages/User/Success";
import SeatingList from "./pages/User/SeatingList";
import LiveFood from "./pages/User/LiveFood";
import Contact from "./pages/User/Contact";

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
                        path="addons"
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
                    path="/packages"
                    element={
                        <UserLayout>
                            <AllPackages />
                        </UserLayout>
                    }
                />
                <Route
                    path="/package/:id"
                    element={
                        <UserLayout>
                            <PackageExplore />
                        </UserLayout>
                    }
                />
                <Route
                    path="/foodStation"
                    element={
                        <UserLayout>
                            <FoodStation />
                        </UserLayout>
                    }
                />
                <Route
                    path="/addons"
                    element={
                        <UserLayout>
                            <Addons />
                        </UserLayout>
                    }
                />
                <Route
                    path="/tables"
                    element={
                        <UserLayout>
                            <Seating />
                        </UserLayout>
                    }
                />
                <Route
                    path="/fill-details"
                    element={
                        <UserLayout>
                            <FillDetails />
                        </UserLayout>
                    }
                />
                <Route
                    path="/address"
                    element={
                        <UserLayout>
                            <Address />
                        </UserLayout>
                    }
                />
                <Route
                    path="/success"
                    element={
                        <UserLayout>
                            <Success />
                        </UserLayout>
                    }
                />
                <Route
                    path="/seating"
                    element={
                        <UserLayout>
                            <SeatingList />
                        </UserLayout>
                    }
                />
                <Route
                    path="/live-food"
                    element={
                        <UserLayout>
                            <LiveFood />
                        </UserLayout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <UserLayout>
                            <Contact />
                        </UserLayout>
                    }
                />

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
