import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './../views/Home'
import Login from './../views/Login'
import PageNotFound from '../views/PageNotFound'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="Home"
          element={<Home />}
        />
        {/* 👇️ only match this when no other routes match */}
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}
