import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { InformationCart } from '../../../store';
import './popular.css';


function Popular() {

    const Datas = useSelector(item => item.reducer);
    const Data = Datas.items.slice(20, 30);
    const Dispatch = useDispatch();

    function favouriteHandler(id) {
        Dispatch(InformationCart.favourite(id))
    }

    function boxHandler(id) {
        Dispatch(InformationCart.boxTotal(id))
    }

  return (
    <section className='popular'>
        <div className='popular__container '>
            <div className='popular__products-slider'>
                {Data.map((item, e)=> (
                    <div className='popular__item' key={e}>
                        <div className='product-card '>
                            <Link to="#" className="product-card__link" />
                            <div className="product-card__actions" >
                                <button onClick={()=> favouriteHandler(item.id)} className={`product-card__actions-item ${item.completed1? '_like': null}` }>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon__like" viewBox="0 0 24 24" >
                                        <path d="M21.291 4.612a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className={`product-card__actions-item `} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon__compare" viewBox="0 0 24 24" >
                                        <path d="M5.75 16.25a1.25 1.25 0 1 0-2.5 0v4.5a1.25 1.25 0 1 0 2.5 0v-4.5ZM10.75 4.25a1.25 1.25 0 1 0-2.5 0v16.5a1.25 1.25 0 1 0 2.5 0V4.25ZM15.75 12.25a1.25 1.25 0 1 0-2.5 0v8.5a1.25 1.25 0 1 0 2.5 0v-8.5ZM20.75 8.25a1.25 1.25 0 1 0-2.5 0v12.5a1.25 1.25 0 1 0 2.5 0V8.25Z"  />
                                    </svg>
                                </button>
                            </div>
                            <div className='product-card__image '>
                                <Link to="#"className="product-card__picture">
                                    <img src={item.img} width={220} height={220} alt="Redmi Note 12 Pro 4G (Global) Grafit kulrang 8/256 GB" title="Redmi Note 12 Pro 4G (Global) Grafit kulrang 8/256 GB" />
                                </Link>
                            </div>
                            <div className='product-card__content'>
                                <Link to='#' className="product-card__col">
                                    <div className="product-card__brand-name">{item.name}</div>
                                </Link>
                                <div className='product-card__col'>
                                    <div className="product-card__price">
                                        <div className="price__head">
                                            <div className="price__main">{item.price}</div>
                                        </div>
                                        <div className="price__credit">{item.credit}</div>
                                    </div>
                                    <div className="product-card__btns">
                                        <button onClick={()=> {boxHandler(item.id)}} className={`product-card__to-card ${item.completed2?'toCard': null}`}>
                                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="icon icon__cart">
                                                <path d="M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z" />
                                                <path d="M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z" />
                                                <path d="M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button className="product-card__to-credit" >Muddatli to'lov</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular;