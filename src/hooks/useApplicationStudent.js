import { useState } from "react";
import * as api from '../utils/index'

export const useApplicationStudent = () => {
    // view retorna la incormacion de la solicitud de los nuevos registros
    const consultingstudentsRequest = async () =>{
        const data = await api.consultingstudentsRequest()
        return data;
    }
    // view retorna la informacion de los usuarios rechazados
    const consultingstudentsRech = async () =>{
        const data = await api.consultingstudentsRech()
        return data;
    }
    
    return{
        consultingstudentsRequest,
        consultingstudentsRech,
    }
    
}