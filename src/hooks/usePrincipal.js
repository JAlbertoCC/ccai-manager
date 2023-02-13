import { useState } from 'react';
import * as api from './../utils/index'

export const usePrincipal = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})

  const getAllList = async (page, limit) => {
    const data = await api.getList(page, limit)
    setAllInformation(data.data)
    console.log(data)
    setPagination(data.pagination)
  }

  return {
    pagination,
    getAllList,
    allInformation
  }
}
