import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img aria-label="Hero Image" src='Media/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%", margin: "0 auto"}}>Signup for free</button>
            </div>  
        </div>
     );
}

export default Hero;