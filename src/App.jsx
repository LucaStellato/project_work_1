import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DefaultLayout from "../layout/DefaultLayout"
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<h1>Ciao</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
