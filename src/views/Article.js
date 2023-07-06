import React, { useState } from "react";
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'


const Article = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='container register-content'>



          
          <HeaderComponent title='Araticulos CCAI'/>
        </div>
    )
}
export default Article
