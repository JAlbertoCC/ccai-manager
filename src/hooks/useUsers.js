import { useState } from 'react';
import * as api from '../utils/index'

export const useUsers = () => {

  const checkingInternalUser = async (matricula) => {
    const data = await api.checkingInternalUser(matricula)
    return data;
  }
  // se creo el metodo asincrono consultingStudents
  const consultingstudentsAccepts = async () => {
    const data = await api.consultingstudentsAccepts()
    return data;
  }


  return {
    checkingInternalUser,
    consultingstudentsAccepts
  }
}
