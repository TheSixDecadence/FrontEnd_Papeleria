import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Providers from "./pages/Providers";
import Debtors from "./pages/Debtors";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/providers" element={<Providers />}></Route>
                <Route path="/debtors" element={<Debtors />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;