import React,{useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight,FaQuoteRight} from 'react-icons/fa';

const Reviews = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  const checknumber = (n) => {
    if(n>people.length - 1){
      return 0
    }
    if(n < 0){
      return people.length -1
    }
    return n
  }

  const nextReviews = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checknumber(newIndex);
    })
  }

  const prevReviews = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checknumber(newIndex);
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index ){
      randomPerson();
    }
    else{
      return setIndex(randomNumber)
    }
  }
  return(
    <article className="reviews">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon"><FaQuoteRight/></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <div>
          <button onClick={prevReviews} className="prev-btn"><FaChevronLeft/></button>
        </div>
        <div>
          <button onClick={nextReviews} className="next-btn"><FaChevronRight/></button>
        </div>
      </div>
      <button onClick={randomPerson} className="random-btn">suprise me</button>
    </article>
  )
};

export default Reviews;