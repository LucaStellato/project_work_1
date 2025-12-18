import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefoultLayout from "./layout/DefoultLayout"
import HomePage from "./pages/HomePage"
import AddTravel from "./pages/AddTravel"
import DetailTravel from "./pages/DetailTravel"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefoultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path="/add" element={<AddTravel />} />
            <Route path="/detail/:id" element={<DetailTravel />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
