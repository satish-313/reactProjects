import React,{useState,useEffect} from 'react';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi';

import data from './data';
import Person from './Person';

const App = () => {
  const [people,setPeolpe] = useState(data);
  const [index,setIndex] = useState(0);

  return(
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <Person person={people[index]}/>
      </div>
      <div className="button-container">
        <button className="prev">
          <FiChevronLeft onClick={() => setIndex(index-1)}/>
        </button>
        <button className="next">
          <FiChevronRight onClick={() => setIndex(index+1)}/>
        </button>
      </div>
    </section>
  )
};

export default App;