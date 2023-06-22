import { useState } from 'react';
import * as api from '../utils/index'

export const useProjects = () => {
    const [allProjects, setAllProjects] = useState([])
    const [pagination, setPagination] = useState({})

    const consultProjects = async () => {
        const data = await api.consultProjects()
        return data;

    }


    return{
        pagination,
        consultProjects
    }
}