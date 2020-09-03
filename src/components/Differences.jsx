import React from 'react';

import {DiffItem} from './reusablecomponents/DiffItem';

import logo from '../logo.svg';

import './css/differences.css'

export function Differences() {
    return (
      <div id="differences" className="differences">
        <DiffItem logo={logo}>
          Consigne, ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus amet reiciendis qui iusto ad veritatis sit perferendis nihil assumenda quas voluptatem quaerat perspiciatis eius praesentium nam reprehenderit, modi neque?
        </DiffItem>
        <DiffItem logo={logo}>
          Bio//Conservateur naturel ipsum dolor sit amet consectetur adipisicing elit. Molestias non nulla blanditiis harum, eligendi pariatur modi aut autem corrupti officia commodi ratione voluptatum, facere qui culpa, cumque debitis ipsa sint.
        </DiffItem>
        <DiffItem logo={logo}>
          Homemade/Local ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor at distinctio libero dolorem quae a fuga! Perferendis neque cupiditate quis explicabo nam numquam magni nihil! Nostrum distinctio provident sequi.
        </DiffItem>
      </div>
    );
}