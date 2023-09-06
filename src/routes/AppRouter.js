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
import ForgotPassword from "../views/ForgotPassword"
import RestorePassword from "../views/RestorePassword"
import ApplicationStudent from "../views/ApplicationStudent"
import Questionnaire from "../views/Questionnaire"
import ReportGeneration from "../views/ReportGeneration"

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
          path="/proyect-detail/:id_project"
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
          element={<InformationView/>}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword/>}
        />
        <Route
          path="/restore-password/:Id"
          element={<RestorePassword/>}
        />
        <Route
          path="/application-student"
          element={<ApplicationStudent/>}
        />
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
        <Route
          path="/restore-password"
          element={<RestorePassword/>}
        />
        <Route 
        path="/Questionnaire"       //Se agrego esta ruta para la nueva vista 
        element={<Questionnaire />} 
        />
        <Route
          path="/report-generation" 
          element={<ReportGeneration />}
          />
      </Routes>
    </BrowserRouter>
  )
} 
