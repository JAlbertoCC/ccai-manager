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

    //Metodo para insertar profesores 
    const insertarTeacher = async (body) => {
        const data = await api.insertarTeacher(body);
        return data;
    }; 

    //Metodo para modificar profesores 
    const modificarTeacher = async (body) => {
        const data = await api.modificarTeacher(body);
        return data; 
    };

    //Metodo para eliminar profesor 
    const eliminarProfesor = async (body) => {
        const data = await api.eliminarProfesor(body);
        return data;
    };


    return{
        pagination,
        consultTeacher,
        checkingInternalUser,
        insertarTeacher,
        modificarTeacher,
        eliminarProfesor,
    };
}

