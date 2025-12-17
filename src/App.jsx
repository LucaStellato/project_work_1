import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
