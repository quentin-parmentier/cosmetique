import React from 'react';

import '../css/diffItem.css'

export function DiffItem(props) {

    const images = require.context("../../img/svg", true);
    let logo = images('./' + props.logo);

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