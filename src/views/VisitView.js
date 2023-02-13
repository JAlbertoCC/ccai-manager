import React from 'react';

import { CardComponent } from '../components/ui/Cards/CardComponent';
import { HeaderComponent } from '../components/ui/Header/HeaderComponent';


const VisitView = () => {

    return (
        <div className='container register-content'>
            <HeaderComponent title="Visita"/>
            <CardComponent classExtra='opacity-card cardSam'>
                <figure className="image is-96x96 center-img">
                    <img src={require("./../assets/logo.png" )} alt="" />
                </figure>
            </CardComponent>
        </div>
    )
    
}

export default VisitView