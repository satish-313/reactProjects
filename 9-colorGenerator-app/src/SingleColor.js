import React,{useState,useEffect} from 'react';

import rgbToHex from './util';

const SingleColor = ({rgb,weight,index}) => {
  const [alert,setAlert] = useState(false);
  const Bc = rgb.join(",");
  const hex = rgbToHex(...rgb);

  /* useEffect(() => {
    if (alert){
      const auto_off = setInterval(() => {
        setAlert(false)
      }, 3000);
      return () => {clearInterval(auto_off)}
    }
  }) */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    },3000)
    return () => clearTimeout(timeout)
  },[alert])

  return(
    <div className={`color ${index >= 10 && 'color-light'}`} style={{background:`rgb(${Bc})`}}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hex)
    }}>
      <p className="percent-value">
        {weight}%
      </p>
      <p className="color-value">
        {hex}
      </p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  )
};

export default SingleColor;