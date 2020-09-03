import React from 'react';

import '../css/diffItem.css'

export function DiffItem(props) {

    const {logo} = props

    return (
      <div className="difference">
        <div className="divLogoDiff">
            <img src={logo} alt="logodifferences" className="logoDiff"/>
        </div>
        <div className="textDiff">
            {props.children}
        </div>
      </div>
    );
}