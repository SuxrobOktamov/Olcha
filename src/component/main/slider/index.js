import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carusel from './carusel/carusel';
import './slider.css';

function SliderCar() {
  return (
    <section className='main-screen'>
        <div className='main-screen__container'>
            <Carusel />
            <div className='main-screen__aside'>
                <div className='main-screen__banner'>
                    <div className='main-banner__head'>
                        Kun mahsuloti
                        <Time />
                    </div>
                    <div className='product-card'>
                         <Link to="/oz/product/view/umnye-casy-ws39-ultra" className="product-card__link" />
                         <div className='product-card__image'>
                            <div className='product-card__sale'>
                                <span>-32%</span>
                            </div>
                            <Link to="/oz/product/view/umnye-casy-ws39-ultra" className="product-card__picture">
                                <img src="https://olcha.uz/image/220x220/products/wdbiHtPze2oHNedfwhkAMq5fgG3sjWAM6041d2HKqJhU92FjeQukJh9cJm39.jpg" width={220} height={220} alt="Aqlli soat WS39 Ultra" title="Aqlli soat WS39 Ultra" />
                            </Link>
                         </div>
                         <div className='product-card__content'>
                            <Link to="/oz/product/view/umnye-casy-ws39-ultra" className="product-card__col">
                                <div className="product-card__brand-name">Aqlli soat WS39 Ultra </div>
                            </Link>
                            <div className="product-card__col">
                                <div className="product-card__price">
                                    <div className="price__head">
                                        <div className="price__main _sale">275  000 so'm</div>
                                        <div className="price__old">400  000 so'm</div>
                                    </div>
                                    <div className="price__credit">38  000 so'm x 12 oy</div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SliderCar;


function  Time()  {

    const [state, setSate] = useState({curTime: []})

    const Hours = new Date().getHours();
    const Minutes = new Date().getMinutes();
    const Seconds = new Date().getSeconds();

    const [index, setIndex] = useState(0);

    setInterval(() => {
        setIndex(index + 1);
    }, 1000);

    useEffect(()=> {
        const Time = [Hours, Minutes, Seconds];
        setSate({curTime:[...Time]});
    }, [index, Hours, Minutes, Seconds])

    return (
        <div className='timer'>
            <span>{state.curTime[0]}</span>
            <span>{state.curTime[1]}</span>
            <span>{state.curTime[2]}</span>
        </div>
    );
}
