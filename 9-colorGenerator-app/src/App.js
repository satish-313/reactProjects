import React,{useState} from 'react';
import Values from 'values.js'

import SigleColor from './SingleColor'

const App = () => {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#1ab859').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true);
      console.log('error')
    }
  }
   
  return(
    <main>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input className={`${error ? 'error' : null} `} type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder={`${error ? 'Color code do not exit' : '#1ab859'}`}/>
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index) => {
          console.log(color)
          return <SigleColor key={index} {...color} index={index}/>
        })}
      </section>
    </main>
  )
};

export default App;