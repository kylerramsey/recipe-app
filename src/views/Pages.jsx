import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Login from "./Login";
import Favorites from "./Favorites";

export default function Pages() {
    const { user } = useContext(AuthContext)
    
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={user.loggedIn ? <Home /> : <Login />}
                />
                <Route path="/Cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path="/Favorites" element={<Favorites />} />
            </Routes>
        </AnimatePresence>
    );
}

