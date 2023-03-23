import { useState } from 'react';
import * as api from '../utils/index'

export const useUsers = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})
  const [checkingUser, setCheckingUser] = useState({})

  const checkingInternalUser = async (matricula) => {
    const data = await api.checkingInternalUser(matricula)
    return data;
  }

  const consultingStudents = async () => {
    const data = await api.consultingStudents()
    return data;
    
  }

  return {
    pagination,
    checkingInternalUser,
    consultingStudents
  }
}
