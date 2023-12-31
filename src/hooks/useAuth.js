import { useState } from 'react';
import * as api from './../utils/auth';

export const useAuth = () => {
  const [loader, setLoader] = useState(false);
  
  const userLogin = async (body) => {
    const data = await api.login(body);

    return data;
  }

  return {
    userLogin
  }
}
 