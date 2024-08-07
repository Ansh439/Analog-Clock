import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Tracking from "./pages/Tracking"
import PrivateTracking from "./components/PrivateTracking"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<PrivateTracking />}>
          <Route path="/tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
