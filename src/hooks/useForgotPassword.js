import { useState } from 'react';
import * as api from './../utils/auth';

export const useForgotPassword = () => {
  const [loader, setLoader] = useState(false);
  
  const resetToken = async (body) => {
    const data = await api.login(body);

    return data;
  }

  return {
    resetToken
  }
}
 