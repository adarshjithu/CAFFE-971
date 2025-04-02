import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Userlist from "./pages/Admin/Users/Users";
import Blank from "./pages/OtherPage/Blank";
import Home from "./pages/User/Home";
import Address from "./pages/User/Address";          // From addressfeature
import ProductDetails from "./pages/User/PackageDetails";  // From master
import FillDetails from "./pages/User/FillDetails";        // From master
import EventDetails from "./pages/User/EventDetails";      // From master

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Dashboard Layout */}
                <Route path="/admin" element={<AppLayout />}>
                    <Route path="blank" element={<Blank />} />
                    <Route path="users" element={<Userlist />} />
                </Route>
                
                {/* User Routes */}
                <Route path="/" element={<Home/>} />
                <Route path="/address" element={<Address/>} />       {/* From addressfeature */}
                <Route path="/product" element={<ProductDetails/>} />  {/* From master */}
                <Route path="/fill-details" element={<FillDetails/>} /> {/* From master */}
                <Route path="/event-details" element={<EventDetails/>} /> {/* From master */}

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}