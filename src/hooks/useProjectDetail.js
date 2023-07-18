import { useState } from "react";
import * as api from "../utils/index";

export const useProjectDetail = () => {
// funcion para llamar la informacion de proyect
  const listProjectInfo = async (params) => {
    const data = await api.listProjectInfo(params);
    return data;
  };
  

  return {
    listProjectInfo,
  };
};
