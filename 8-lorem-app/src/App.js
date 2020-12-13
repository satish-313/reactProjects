import React,{useState} from 'react';

import data from './data';

const App = () => {
  const [count,setCount] = useState(0)
  const [text,setText] = useState([]);

  const number_of_paragraphs = (number) => {
    if (number <= 0){
      return 1
    }
    else if (number >= data.length){
      return data.length - 1
    }
    else {
      return number
    }
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    let amout = parseInt(count)
    setText(data.slice(0,number_of_paragraphs(amout)))
  }

  return(
    <section className="section-center">
      <h3>Tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSumbit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        <hr/>
        {text.map((p,index) => {
          return (
            <p key={index}>{p}</p>
          )
        })}
      </article>
    </section>
  )
};

export default App;