import { useState } from 'react';
import * as api from '../utils/index'

export const useMaterials = () => {
    const [allMaterials, setAllMaterials] = useState([])
    const [pagination, setPagination] = useState({})

    const consultMaterials = async () => {
        const data = await api.consultMaterials()
        return data;

    }


    return{
        pagination,
        consultMaterials
    }
}