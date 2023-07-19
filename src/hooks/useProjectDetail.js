import { useState } from "react";
import * as api from "../utils/index";

export const useProjectDetail = () => {
// funcion para llamar la informacion de proyect
  const listProjectInfo = async (id_project) => {
    const data = await api.listProjectInfo(id_project);
    return data;
  };
// funcion para llamar la informacion de los integrantes del proyecto (alumnos)
const listStudentsInProject = async (body) => {
  const data = await api.listStudentsInProject(body);
  return data;
};
// funcion para llamar la infromacion de los recursos que solicito el proyecto
  const listResourceBorrowedInProject = async (body) => {
    const data = await api.listResourceBorrowedInProject(body);
    return data;
  };
// funcion para llamar la infromacion de los asesores asignados al proyecto
  const adviserInProject = async (body) => {
    const data = await api.adviserInProject(body);
    return data;
  };
  return {
    listProjectInfo,
    listStudentsInProject,
    listResourceBorrowedInProject,
    adviserInProject,
  };
};
