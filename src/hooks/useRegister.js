import { useState } from 'react';
import * as api from '../utils/index'

export const useRegister = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})
  const [checkingUser, setCheckingUser] = useState({})

  const checkingInternalRegister = async (matricula, name, lastnamef, lastnamem, adress, phone, gender, career, service, institutional_email, password) => {
    const data = await api.checkingInternalRegister(matricula, name, lastnamef, lastnamem, adress, phone, gender, career, service, institutional_email, password)
    return data;
  }

  return {
    pagination,
    checkingInternalRegister
  }
}