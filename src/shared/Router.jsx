import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Mypage from "../pages/Mypage"
import Results from "../pages/Results"
import Test from "../pages/Test"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/my-page" element={<Mypage/>}/>
        <Route path="/test-results" element={<Results/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/test" element={<Test/>}/>
        </Routes></BrowserRouter>
  )
}

export default Router