import React,{useState,useEffect} from 'react';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi';

import data from './data';
import Person from './Person';

const App = () => {
  const [people,setPeolpe] = useState(data);
  const [index,setIndex] = useState(0);

  const valid_button = (id) => {
    if (id > people.length - 1){
      return 0
    }
    else if (id < 0){
      return people.length - 1
    }
    else {
      return id
    }
  }

  useEffect(() => {
    const next_item = setInterval(() => {
      setIndex(valid_button(index+1))
    }, 5000);

    return () => {clearInterval(next_item)}
  })

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
      <button className="prev">
        <FiChevronLeft onClick={() => setIndex(valid_button(index-1))}/>
      </button>
      <button className="next">
        <FiChevronRight onClick={() => setIndex(valid_button(index+1))}/>
      </button>
    </section>
  )
};

export default App;