import React from 'react'
import Card from './Card'
import data from '../../data/cardData'

const CardHolder = () => {
    return (
        <section className='card-holder'>
            {
                data.map(function (item, index) {
                    return (
                        <Card key={item.id}
                            location={item.location}
                            title={item.title}
                            image={item.imageUrl}
                            googleMapsurl={item.googleMapsUrl}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            description={item.description}
                        />
                    )
                })
            }
        </section>
    )
}

export default CardHolder