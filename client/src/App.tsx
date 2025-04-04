import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

import Blank from "./pages/OtherPage/Blank";
import Home from "./pages/User/Home";

import Address from "./pages/User/Address"; // From addressfeature
import ProductDetails from "./pages/User/PackageDetails"; // From master
import FillDetails from "./pages/User/FillDetails"; // From master
import EventDetails from "./pages/User/EventDetails"; // From master
import AccountDetails from "./pages/User/AccountDetails";
import Profile from "./pages/User/Profile";
import AboutUs from "./pages/User/AboutUs";

import UserLayout from "./layout/UserLayout";
import Categories from "./pages/Admin/Categories";
import Products from "./pages/Admin/Products";
import Packages from "./pages/Admin/Packages";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route path="/admin" element={<AppLayout />}>
          <Route path="blank" element={<Blank />} />
          <Route path="categories" element={<Categories/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="packages" element={<Packages/>}/>
        </Route>



        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="address" element={<Address />} />
          <Route path="product" element={<ProductDetails />} />
          <Route path="fill-details" element={<FillDetails />} />
          <Route path="event-details" element={<EventDetails />} />
          <Route path="account-details" element={<AccountDetails />} />
          <Route path="my-profile" element={<Profile />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
