import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <img src={props.image} className="card-img" />
      </div>
      <div>
        <img src='./images/map.png' alt='map' className='card-map' />
        <span className='location'>{props.location}</span>
        <a href={props.googleMapsurl} target='_blank' className='map'>View on Google Maps</a>
        <h1 className='title'>{props.title}</h1>
        <p className='date'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='description'>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default Card