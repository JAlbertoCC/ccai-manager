import { useState } from 'react';
import * as api from '../utils/index'

export const useService = () => { 
    const [allInformation, setAllInformation] = useState([])
    const [pagination, setPagination] = useState({})

    //se creo el metodo asincronk consultService
    const consultService = async () => {
        const data = await api.consultService()
        return data;

    }


    return{
        pagination,
        consultService
    }
}