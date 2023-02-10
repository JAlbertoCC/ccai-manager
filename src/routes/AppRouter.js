import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './../views/Home'
import Login from './../views/Login'
import Proyects from '../views/Proyects'
import Materials from '../views/Materials'
import Register from './../views/Register'
import Resources from './../views/Resources'
import PageNotFound from '../views/PageNotFound'
import ProyectDetail from './../views/ProyectDetail'
import SuccesfullRegister from '../views/SuccesfullRegisterView'
import Calendar from "../views/Calendar"


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
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/resources"
          element={<Resources />}
        />
        <Route
          path="/proyects"
          element={<Proyects />}
        />
        <Route
          path="/proyect-detail"
          element={<ProyectDetail />}
        />
        {/* 👇️ only match this when no other routes match */}
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route
          path="/SuccesfullRegister"
          element={<SuccesfullRegister />}
        />
        <Route
          path="/proyects"
          element={<Proyects />}
        />
        <Route
          path="/materials"
          element={<Materials />}
        />
        <Route
          path="/calendar"
          element={<Calendar />}
        />
      </Routes>
    </BrowserRouter>
  )
}
