
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockDetail } from "./pages/StockDetail"
import { StockOverview } from "./pages/StockOverview"
import './App.css'

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverview />} />
          <Route path="/detail/:symbol" element={<StockDetail />} />

        </Routes>
      </BrowserRouter>
    </main>
  )
}

