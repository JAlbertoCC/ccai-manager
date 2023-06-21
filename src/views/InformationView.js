import React, { useState } from "react";
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'


const InformationView = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='container register-content'>
          <HeaderComponent title='Información '/>
        </div>
    )
}
export default InformationView
