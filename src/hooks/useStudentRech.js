import { useState } from "react";
import * as api from '../utils/index'

export const useStudentRech = () => {
    const [allInformation, setAllInformation] = useState([]);
    const [pagination, setPagination] = useState({});
    const [checkingUser, setCheckingUser] = useState({});

    const checkingInternalUser = async (matricula) => {
        const data = await api.checkingInternalUser(matricula)
        return data;
    }

    const consultingStudentRech = async () =>{
        const data = await api.consultingStudentRech()
        return data;
    }

    return{
        pagination,
        checkingInternalUser,
        consultingStudentRech
    }
}