import React from 'react';
import { Link } from 'react-router-dom';
import './autoVideo.css';

function AutoVideo() {
  return (
    <>
        <section className='catalog-auto'>
            <div className='catalog-auto__container'>
                <Link to='#'>
                    <video  autoPlay loop muted src="https://olcha.uz/image/original/homePage/kqbE6s0rjwXwyVPOmEFZ34fCDGwbnYb3egpq331hpupeSYeq7BlyeBBLpJ97.mp4" style={{width: '100%'}}>
                        <source src="https://olcha.uz/image/original/homePage/kqbE6s0rjwXwyVPOmEFZ34fCDGwbnYb3egpq331hpupeSYeq7BlyeBBLpJ97.mp4" type="video/webm" data-v-21816440 />
                        <img src="https://olcha.uz/image/original/homePage/P1rUR3Z6FWmr9UH1gpLtGKksZFWeyL7SajbrZNNdp5hFvTY5WBT8bopci9dW.png" alt='' />
                    </video>
                </Link>
            </div>
        </section>
        <section className="triple_banner">
            <div className="offer__container">
                <div className="offer__top-row">
                    <Link to="#" className="offer__item">
                        <img src="https://olcha.uz/image/460x152/homePage/EuUg87eQTpc8z1qTQP7ZgaR0PivK6g5yt4K3J4BZ7XFvEFwbtlpVnkGLYGw3.png" alt='' />
                    </Link>
                    <Link to="#" className="offer__item">
                        <img src="https://olcha.uz/image/460x152/homePage/EuUg87eQTpc8z1qTQP7ZgaR0PivK6g5yt4K3J4BZ7XFvEFwbtlpVnkGLYGw3.png" alt='' />
                    </Link>
                    <Link to="#" className="offer__item">
                        <img src="https://olcha.uz/image/460x152/homePage/EuUg87eQTpc8z1qTQP7ZgaR0PivK6g5yt4K3J4BZ7XFvEFwbtlpVnkGLYGw3.png" alt='' />
                    </Link>
                </div>
            </div>
        </section>

        <section className="twice_banner">
            <div className="offer__container">
                <div className="offer__bottom-row">
                    <Link to='#' className="offer__item">
                        <img src="https://olcha.uz/image/original/homePage/vpNH7dxm2cM9ISvEIZ9vmCFxHHdyJHB2jUzLYfcv3VjRo0woYYhNIhpBuxBJ.png" alt='' />
                    </Link>
                    <Link to='#' className="offer__item" >
                        <img src="https://olcha.uz/image/original/homePage/qu1atXHyuynZVxBBF9oBSlRyWUvJYmaf1a04uFk235FXhVBoarxbbchGWLtO.png" alt='' />
                    </Link>
                </div>
            </div>
        </section>

    </>
    
  )
}

export default AutoVideo;