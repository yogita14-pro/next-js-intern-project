import React from 'react'
import { IconStarFill, IconStarHalf } from './Icons';

function Rating({page}: {page: string}) {
  return (
    <div style={{color:"black"}}>
        {page==="pdp" ? ((Math.random() * (4.5 - 4.0) ) + 4.0).toFixed(1) : ""}
        <span> <IconStarFill/><IconStarFill/><IconStarFill/><IconStarFill/><IconStarHalf/></span>
        <span style={{fontSize: '18px'}}> ({Math.floor(Math.random() * 5000)+500})</span>
    </div>
  )
}

export default Rating;
