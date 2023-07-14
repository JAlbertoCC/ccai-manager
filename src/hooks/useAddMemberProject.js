import { useState } from 'react';
import * as api from '../utils/index'

export const useAddMemberProject = () => {
  const [pagination, setPagination] = useState({})
  
  const addMembersProject = async (body) => {
    const data = await api.addMembersProject(body)
    return data;
  }

  return {
    addMembersProject,

  }
}