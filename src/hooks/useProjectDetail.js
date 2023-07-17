import { useState } from "react";
import * as api from "../utils/index";

export const useProjectDetail = () => {

  const consulProjectInfo = async (params) => {
    const data = await api.consulProjectInfo(params);
    return data;
  };
  

  return {
    consulProjectInfo,
  };
};
