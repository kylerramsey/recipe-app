import Home from "./Home";
import Cuisine from "./Cuisine";
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Pages() {
  return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cuisine/:type" element={<Cuisine />} />
        </Routes>
    
  )
}
