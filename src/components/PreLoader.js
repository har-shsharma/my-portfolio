import React, { useEffect } from 'react'
import { preLoaderAnim } from './animationFunction'
import './PreLoader.css'

function PreLoader() {
    useEffect(()=>{
        preLoaderAnim();
    },[]);
  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Design</span>
            <span>Develop</span>
            <span>Deliver</span>
        </div>
    </div>
  )
}

export default PreLoader
