import React,{useState} from 'react';
import {FaQuoteRight} from 'react-icons/fa';

const Person = ({person}) => {
  const {name,title,image,quote} = person
  return(
    <article>
      <img src={image} alt={name} className="person-image"/>
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon"></FaQuoteRight>
    </article>
  )
}

export default Person;
