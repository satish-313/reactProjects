import React,{useState,useEffect} from 'react';

import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

const App = () => {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEditing] = useState(false);
  const [editId,setEditId] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length === 0){
      setAlert({show:true,msg:"Enpty Input",type:"danger"})
    }
    else if(name.length != 0 && isEditing){
      const editItem = {id:editId,title:name}
      setList(list.map((item) => {
        if (editItem.id === item.id){
          return {...item,title:name}
        }
        return item
      }));
      setAlert({show:true,msg:"Edit the item",type:"success"});
      setIsEditing(false)
      setName('');
    }
    else{
      const newItem = {id: new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setAlert({show:true,msg:"added a item",type:"success"})
      setName('');
    }
  }

  const EditingList = (id) => {
    const item = list.find((i) => i.id === id);
    setIsEditing(true);
    setEditId(null);
    setName(item.title)
  }

  const Delete = (id) => {
    const newItem = list.filter((i) => i.id !== id)
    setList(newItem)
    setAlert({show:true,msg:'remove item',type:"danger"})
  }

  const Clear_all = () => {
    if(list.length !== 0){
      setList([]);
      setAlert({show:true,msg:"clear all list",type:'danger'})
    }
    else{
      setAlert({show:true,msg:"First add item",type:"danger"})
    }
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return(
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert alert={alert} setAlert={setAlert}/>}
        <h3>TODO bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder={`${list.length === 0 ? "coding" : ""}`} value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} Delete={Delete} Editing={EditingList}/>
        <button className="clear-btn" onClick={() => Clear_all()}>clear all</button>
      </div>
    </section>
  )
};

export default App;