import React from 'react'
import CardHolder from './components/cards/CardHolder'
import Navbar from './components/navbar/Navbar'

const App = () => {
    return (
        <>
            <div className='app'>
                <Navbar />
                <CardHolder />
            </div>
        </>
    )
}

export default App