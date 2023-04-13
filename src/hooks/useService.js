import { useState } from 'react';
import * as api from '../utils/index'

export const useService = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})

// se creo el metodo asincrono consultingService
  const consultingService = async () => {
    const data = await api.consultingService()
    return data;
  
  }


  return {
    pagination,
    consultingService
  }
}