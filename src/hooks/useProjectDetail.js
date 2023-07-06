import { useState } from "react";
import * as api from "../utils/index";

export const useProjectDetail = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [pagination, setPagination] = useState({});

  const consulProjectInfo = async (params) => {
    const data = await api.consulProjectInfo(params);
    return data;
  };

  return {
    pagination,
    consulProjectInfo,
  };
};
