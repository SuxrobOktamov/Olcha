import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../component/header';
import Main from '../component/main';
import SeoText from '../component/seoText';
import Footer from '../component/footer';
import store from '../store';


function Home() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='Home'>
          <Header />
          <Main />
          <SeoText />
          <Footer />
        </div>
      </Provider> 
    </BrowserRouter>
  )
}

export default Home;