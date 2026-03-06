import "./input.css"
import { Routes, Route } from "react-router-dom"

import DataContext from "./context/DataContext"

import RepairLists from "./components/RepairLists"

import HomePage from "./pages/HomePage"
import { repairLists } from "./config/data"

const App = () => {
  return (
    <div>
      <DataContext.Provider value={repairLists}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </DataContext.Provider>
    </div>
  )
}

export default App
