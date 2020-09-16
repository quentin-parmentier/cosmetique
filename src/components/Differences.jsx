import React from 'react';

import {DiffItem} from './reusablecomponents/DiffItem';

import './css/differences.css'

export function Differences(props) {

  const {differences,size} = props

    return (
      <div id="differences" className="differences">
        {differences.map((difference,index) => {
          return(
          <DiffItem logo={difference.logo} key={"diff"+index} size={size}>
            {difference.text}
          </DiffItem>)
        })}
      </div>
    );
}