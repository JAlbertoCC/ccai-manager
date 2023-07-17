import { useState } from 'react';
import * as api from '../utils/index'

export const useRegister = () => {
  
  const checkingInternalRegister = async (body) => {
    const data = await api.checkingInternalRegister(body)
    return data;
  }

  return {
    checkingInternalRegister,
  }
}