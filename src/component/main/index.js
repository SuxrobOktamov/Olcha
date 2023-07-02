import React from 'react';
import AutoVideo from './autoVideo';
import Avto from './avto';
import Books from './books';
import Brands from './brands';
import Categories from './categories';
import './main.css';
import Popular from './popular';
import SliderCar from './slider';



function Main() {
  return (
    <main className='page'>
      <SliderCar />
      <Categories />
      <Popular />
      <AutoVideo />
      <Books />
      <Avto />
      <Brands />
    </main>
  )
}

export default Main;