import React from 'react';

export const TabsComponent = () => {
  return (
    <div>
      <div className="tabs">
        <ul>
          <li className="is-active"><a href="#tab1"><span class="tab-text">Alumnos</span></a></li>
          <li><a href="#tab2"><span class="tab-text">Docentes</span></a></li>
          <li><a href="#tab3"><span class="tab-text" >Materiales</span></a></li>
        </ul>
      </div>
    </div>
  )
}
