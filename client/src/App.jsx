import "./input.css"
import { Routes, Route } from "react-router-dom"

<<<<<<< HEAD
// pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import IntroPage from "./pages/IntroPage"
import AdminPage from "./pages/admin/adminPage"
import Dashboard from "./pages/admin/Dashboard"
import RepairListPage from "./pages/admin/repairListPage"

=======
import HomePage from "./pages/HomePage"
import AndroidProductPage from "./pages/AndroidProductPage"
import IphoneProductPage from "./pages/IphoneProductPage"
import AdminPage from "./pages/adminPage"
import RepairListPage from "./pages/RepairListPage"
import DashboardPage from "./pages/DashboardPage"
>>>>>>> 5230011df2aa1c7b17967c7d6f23f989bbd069c9

const App = () => {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<IntroPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/repairList" element={<RepairListPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/AndroidProductPage" element={<AndroidProductPage />} />
        <Route path="/IphoneProductPage" element={<IphoneProductPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/RepairListPage" element={<RepairListPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
>>>>>>> 5230011df2aa1c7b17967c7d6f23f989bbd069c9
      </Routes>
    </div>
  )
}

export default App
