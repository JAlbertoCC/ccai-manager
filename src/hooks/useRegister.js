import { useState } from 'react';
import * as api from '../utils/index'

export const useRegister = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})
  const [checkingUser, setCheckingUser] = useState({})

  const checkingInternalRegister = async (body) => {
    const data = await api.checkingInternalRegister(body)
    return data;
  }
  
  const consultingSex = async () => {
    const data = await api.consultingSex()
    return data;
  }

  
  return {
    pagination,
    checkingInternalRegister,
    consultingSex
  }
}