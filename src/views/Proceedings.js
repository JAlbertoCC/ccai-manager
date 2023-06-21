import React, { useState } from "react";
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'


const Proceedings = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='container register-content'>
          <HeaderComponent title='Expedientes del CCAI'/>
        </div>
    )
}
export default Proceedings