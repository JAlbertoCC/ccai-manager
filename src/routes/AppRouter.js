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
import Checkin from '../views/Checkin'
import VisitView from "../views/VisitView"
import Users from "../views/Users"
import Article from "../views/Article"
import Proceedings from "../views/Proceedings"
import InformationView from "../views/InformationView"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="home"
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
        <Route
          path="/calendar"
          element={<Calendar />}
        />
        <Route
          path="/article"
          element={<Article />}
        />
        <Route
          path="/proceedings"
          element={<Proceedings />}
        />
        <Route
          path="/informationView"
          element={<InformationView/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route
          path="/materials"
          element={<Materials />}
        />
        <Route
          path="/calendar"
          element={<Calendar />}
        />
        <Route
          path="/checkin"
          element={<Checkin />}
        />
         <Route
          path="/visit-view"
          element={<VisitView />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
        <Route
          path="/resources"
          element = {<Resources />}
        />
      </Routes>
    </BrowserRouter>
  )
}
