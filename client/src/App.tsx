import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/OtherPage/NotFound";

import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Userlist from "./pages/Admin/Users/Users";
import Blank from "./pages/OtherPage/Blank";
import Home from "./pages/User/Home";
import Address from "./pages/User/Address";


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
                
                   <Route path="/" element={<Home/>}/>
                   <Route path="/address" element={<Address/>}/>
              

                {/* Auth Layout */}

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
