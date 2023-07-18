import { useState } from "react";
import * as api from '../utils/index'

export const useApplicationStudent = () => {
    // view retorna la incormacion de la solicitud de los nuevos registros
    const consultingStudentRequest = async () =>{
        const data = await api.consultingStudentRequest()
        return data;
    }
    // view retorna la informacion de los usuarios rechazados
    const consultingStudentRech = async () =>{
        const data = await api.consultingStudentRech()
        return data;
    }
    return{
        consultingStudentRequest,
        consultingStudentRech
    }
    
}