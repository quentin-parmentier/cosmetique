import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export function Rubrique(props) {

    const {title,active,link, onClick} = props
    
    return (
      <div onClick={() => onClick()}>
        {link === undefined ? <p className={active ? "active" : null}> {title} </p> : <Link className={active ? "active" : null} to={link}> {title} </Link>}
      </div>
    );
}