import "./input.css"
import { Routes, Route } from "react-router-dom"

import { repairLists } from "./config/data"
import DataContext from "./context/DataContext"

import  ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div>
      <DataContext.Provider value={repairLists}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </DataContext.Provider>
    </div>
  )
}

export default App
