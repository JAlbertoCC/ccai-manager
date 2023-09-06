import { useState } from "react";
import * as api from "../utils/auth";

export const useRestorePassword = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [pagination, setPagination] = useState({});

  const restorePass = async (params) => {
    const data = await api.restorePass(params);
    return data;
  };

  return {
    pagination,
    restorePass,
  };
};
