import "./input.css"
import { Routes, Route } from "react-router-dom"

// pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import IntroPage from "./pages/IntroPage"
import AdminPage from "./pages/admin/adminPage"
import Dashboard from "./pages/admin/Dashboard"
import RepairListPage from "./pages/admin/repairListPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/repairList" element={<RepairListPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
