import React,{useEffect} from 'react';

const Alert = ({alert,setAlert}) => {
  const {show,msg,type} = alert;
  let backgroundColor = "";

  if(type === "danger"){
    backgroundColor = "var(--clr-red-light)";
  }
  else if (type === "success"){
    backgroundColor = "var(--clr-green-light)";
  }
  else{
    backgroundColor = "";
  }

  useEffect(() => {
    const alert_off = setTimeout(() => {
      setAlert({show:false})
    },2000)
    return () => clearTimeout(alert_off)
  },[show]);

  return(
    <div className="alert" style={{backgroundColor:backgroundColor}}>
      <p>{show?`You ${msg} ` : ''}</p>
    </div>
  )
}

export default Alert;