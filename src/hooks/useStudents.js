import { useState } from 'react';
import * as api from '../utils/index'

export const useStudents = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})
  const [checkingUser, setCheckingUser] = useState({})

  const checkingInternalUser = async (matricula) => {
    const data = await api.checkingInternalUser(matricula)
    return data;
  }
// se creo el metodo asincrono consultingStudents
  const consultingStudentsData = async () => {
    const data = await api.consultingStudentsData()
    return data;
  }


  return {
    pagination,
    checkingInternalUser,
    consultingStudentsData
  }
}
