import { useState } from 'react';
import * as api from '../utils/index'

export const useService = () => { 
    //se creo el metodo asincronk consultService
    const consultService = async () => {
        const data = await api.consultService()
        return data;

    }
    return{
        consultService
    }
}