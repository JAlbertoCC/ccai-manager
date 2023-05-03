import React, { useState, useEffect } from 'react';

export const TabsComponent = (props) => {
  const { tabs = [], selectedTab = 1, children, onChangeTab = () => { } } = props;
  
  return (
    <>
      <div className="tabs" style={{ width: '100%' }}>
        <ul>
          {
            tabs.map((item) => {
              return (
                <li
                  key={item.id}
									className={`${selectedTab === item.id ? 'is-active' : ''}`}
									onClick={() => onChangeTab(item.id)}
                >
                <a href="#" >{item.Docentes}</a>
                <a href="#" >Docentes</a>
                <a href="#">Materiales</a>
									
                </li>
              )
            })
          }
        </ul>
      </div>
      {children}
    </>
  )
}
