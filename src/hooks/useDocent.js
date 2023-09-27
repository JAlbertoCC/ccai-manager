import { useState } from 'react';
import * as api from '../utils/index'

export const useDocent = () => {
    const [allInformation, setAllInformation] = useState([])
    const [pagination, setPagination] = useState({})
    const [checkingUser, setCheckingUser] = useState({})

    const checkingInternalUser = async (matricula) => {
        const data = await api.checkingInternalUser(matricula)
        return data;
    }
    
     //se creo el metodo asincronk consultService
     const consultTeacher = async () => {
        const data = await api.consultTeacher()
        return data;
    }
    // -- ----
    const addTeacher = async(body) =>{
       const data = await api.addTeacher(body)
       return data;

    }


    return{
        pagination,
        consultTeacher,
        checkingInternalUser,
        addTeacher
    }
}

