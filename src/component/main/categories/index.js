import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { InformationCart } from '../../../store';
import './categoriesOne.css';



function Categories() {
    const Counter = useRef();
    const Data = useSelector(item => item.reducer);
    const Datas = Data.items.slice(0, 20);
    const dispatch = useDispatch();
    
    function prevHandler() {
        dispatch(InformationCart.prev(Datas.length))
    }

    function nextHandler() {
        dispatch(InformationCart.next(Datas.length))
    }

  return (
    <div className='categories'>
        <div className='categories__container'>
            <div className="splide__arrows">
                <button onClick={prevHandler} className=" splide__arrow  splide__arrow--prev" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={40} height={40}>
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                    </svg>
                </button>
                <button onClick={nextHandler} className=" splide__arrow  splide__arrow--next" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={40} height={40}>
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                    </svg>
                </button>
            </div>
        </div>
        <ul ref={Counter} className='splide__list' style={{transform: `translateX(${Data.count* -128}px)`}}>
            {Datas.map((item, e) => (
                <li className='splide__slide' key={e}>
                    <Link to='#' className='categories__item'>
                        <div className='categories__item-image'>
                            <img loading="lazy" src={item.img} alt="Televizor, foto-video va audio" width={128} height={128} title="Televizor, foto-video va audio" />
                        </div>
                        <div className="categories__item-text">{item.name}</div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Categories;