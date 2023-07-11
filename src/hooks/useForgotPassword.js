import { useState } from 'react';
import * as api from '../utils/auth'

export const useForgotPassword = () => {
  const [pagination, setPagination] = useState({})
  
  const usersForgotPassword = async (body) => {
    const data = await api.forgotPasswordTwo(body)
    return data;
  }

  return {
    pagination,
    usersForgotPassword,

  }
}
