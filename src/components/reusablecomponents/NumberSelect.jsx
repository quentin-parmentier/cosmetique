import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

import '../css/numberselect.css'

export function NumberSelect(props) {

    const {tabrange,textrender,defaultValue,setValue} = props;

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={defaultValue}
            onChange={(e) => setValue(e.target.value)}
            renderValue={(value) => `${textrender} ${value}`}
            >
            {tabrange.map((range) => (<MenuItem value={range.val} key={range.val}>{range.txt}</MenuItem>))}
        </Select>
    );
}