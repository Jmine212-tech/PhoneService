import "./input.css"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AndroidProductPage from "./pages/AndroidProductPage"
import IphoneProductPage from "./pages/IphoneProductPage"
import AdminPage from "./pages/adminPage"
import RepairListPage from "./pages/RepairListPage"
import DashboardPage from "./pages/DashboardPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AndroidProductPage" element={<AndroidProductPage />} />
        <Route path="/IphoneProductPage" element={<IphoneProductPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/RepairListPage" element={<RepairListPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
