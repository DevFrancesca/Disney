import React from 'react'
import './Card.css'

const Card = ({arr}) => {
  const data = Object.values(arr)
  return (
    <div className='cardCon'>
        <div className="cardWrap">
            {
              data.map((props)=>(
                <div className="card1">
              <div className="image">
                <img src={props.cardImg} alt="" />
              </div>
              <div className="textWrap">
                <h3>{props.title}</h3>
                <p>{props.subTitle}</p>
                <span>Stream Now</span>
              </div>
              <div className="type" style={{backgroundColor:`${props.type === "new" ? "green": props.type ==="recommend" ? "red" : props.type=== "original" ? "palevioletred" : "black"}`}}>{props.type}</div>
            </div>
              )
              
              
              )
            }
           
        </div>
  </div>
  )
}

export default Card
