import { useState } from 'react';
import * as api from '../utils/index'

export const useCreer = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})

// se creo el metodo asincrono consultCareer
  const consultCareer = async () => {
    const data = await api.consultCareer()
    return data;
  
  }


  return {
    pagination,
    consultCareer
  }
}