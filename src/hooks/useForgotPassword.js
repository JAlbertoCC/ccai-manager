import { useState } from 'react';
<<<<<<< HEAD
import * as api from './../utils/auth';

export const useForgotPassword = () => {
  const [loader, setLoader] = useState(false);
  
  const resetToken = async (body) => {
    const data = await api.login(body);

=======
import * as api from '../utils/auth'

export const useForgotPassword = () => {
  const [pagination, setPagination] = useState({})
  
  const usersForgotPassword = async (body) => {
    const data = await api.forgotPasswordTwo(body)
>>>>>>> parent of be122f9 (Revert "[MERGE]VERIFICAR SI LA VISTYA FORGOT PASSWORD CONSUME EL API")
    return data;
  }

  return {
<<<<<<< HEAD
    resetToken
  }
}
 
=======
    pagination,
    usersForgotPassword,

  }
}
>>>>>>> parent of be122f9 (Revert "[MERGE]VERIFICAR SI LA VISTYA FORGOT PASSWORD CONSUME EL API")
