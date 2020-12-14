import React from 'react';
import {FaEdit,FaTrash} from 'react-icons/fa'

const List = ({items,Delete,Editing}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const {id,title} = item
        return (
          <article key={id} className="grocery-item">
             <p className="title">{title}</p>
             <button type="button" onClick={() => Editing(id)} className="Edit-btn"><FaEdit/></button>
             <button type="button" onClick={() => Delete(id)} className="delete-btn"><FaTrash/></button>
          </article>
        )
      })}
    </div>
  )
}

export default List;