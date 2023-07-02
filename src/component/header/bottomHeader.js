import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CountContext } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { InformationCart } from '../../store';


function BottomHeader() {

    const Catalog = useSelector(item => item.reducer);
    const Catalogs = Catalog.items.slice(0, 20);

    const [phoneOneLenght, setPhoneOneLenght] = useState(0);
    const [phoneTwoLenght, setPhoneTwoLenght] = useState(0);

    useEffect(()=> {
        setPhoneOneLenght(Catalog.phoneArr1.length)
        setPhoneTwoLenght(Catalog.phoneArr2.length)

    }, [Catalog.phoneArr1, Catalog.phoneArr2 ])

    const [, setIsTrue, isScroll, botScroll] = useContext(CountContext)
    const [serch , setSearch] = useState(false);
    const [menu , setMenu] = useState(false);
    const [Id , setId] = useState(0);


    function activeHandler() {
        setSearch(true);
    }
    function removeeHandler() {
        setSearch(false);
    }
    function menuHandler() {
        setMenu(!menu);
    }
    function closeHandlerIcon() {
        setMenu(false);
    }

    function linkHandler() {
        setMenu(false);
    }

    function changeHandler() {
        setIsTrue(true)
    }

    function closeHandler(e) {
        setMenu(false);
    }

    function inforHandler(id) {
        setId(id);
    }

    function openHandler(e) {
        const open = e.target.parentNode.parentNode.parentNode.parentNode.children;
        Array.from(open).forEach(item => {
            item.classList.remove('open')
        })
        e.target.parentNode.parentNode.parentNode.classList.add('open');
    }

    const Data = useSelector((item => item.reducer));
    const Dispatch = useDispatch();

    const handLeChange = (value) => {   
        Dispatch(InformationCart.search(value));
        Dispatch(InformationCart.searchItems());
    }

    function serchItemHandler(name) {
        Dispatch(InformationCart.searchItem(name.toLowerCase()));
        setSearch(false);
    }



  return (
    <div className={`bottom-header ${isScroll? 'scroll': null} `}>
        <div className='containers'>
            <div className='bottom-header-content'>
                <Link to='/oz' className='bottom-header-logo'>
                    <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="olcha.uz" width={102} height={30} />
                </Link>
                <Button  onClick={menuHandler} className={`bottom-header-menu-btn ${menu? '_active': null}`}>
                    <div>
                        <span />
                        <span />
                        <span />
                    </div>
                    <span>Katalog</span>
                </Button>
                <div className={`bottom-header__search ${serch? '_active-search': null}`}>
                    <div onClick={removeeHandler} className={`search-wrapper ${serch? '_active-search': null}`}></div>
                    <div className={`form-search ${serch? '_active-search': null}`}>
                        <input placeholder="Katalog bo'yicha qidirish" onChange={(e) => handLeChange(e.target.value)} onClick={activeHandler} className="form-search__input" type="text" />
                        <button aria-label="Search button" className="form-search__btn">
                            <span>
                                <img src="https://olcha.uz/_nuxt/search.2a234c15.svg" alt="search" />
                            </span>
                        </button>
                        <div className="search-results-list popup-wrapper__inner">
                            {
                                Data.results.map((item, e) => (
                                    <NavLink to='#' onClick={() => serchItemHandler(item.name)} className="search-results-list__item" key={e}>
                                        <div className="search-results-list__product">
                                            <div className="search-results-list__product-image">
                                                <img loading="lazy" src={item.img} alt="Bar stuli Tel Bar" />
                                            </div>
                                            <div className="search-results-list__product-content">
                                                <div className="search-results-list__product-title">
                                                    <span>{item.name}</span>
                                                </div>
                                                <span className="search-result-action" />
                                            </div>
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`header-bottom_actions  ${botScroll? 'scroll-bottom': null}`}>
                    <Link to="/oz/compare" className="actions-link">
                        <div className="actions-item__img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon__comparison">
                                <rect x="3.25" y={15} width="2.5" height={7} rx="1.25" />
                                <rect x="8.25" y={3} width="2.5" height={19} rx="1.25" />
                                <rect x="13.25" y={11} width="2.5" height={11} rx="1.25" />
                                <rect x="18.25" y={7} width="2.5" height={15} rx="1.25" />
                            </svg>
                        </div>
                        <div className="actions-item__text">Taqqoslash</div>
                    </Link>
                    <Link to="/oz/favorites" className="actions-link">
                        <div className="actions-item__img">
                            <span>{phoneOneLenght}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon__favorites">
                                <path d="M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="actions-item__text">Sevimlilar</div>
                    </Link>
                    <Link to="/oz/cart" className="actions-link">
                        <div className="actions-item__img">
                            <span>{phoneTwoLenght}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="icon icon__cart">
                                <path d="M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z" /><path d="M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z" /><path d="M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="actions-item__text">Savatcha</div>
                    </Link>
                    <div onClick={changeHandler} className="actions-link" style={{cursor: 'pointer'}} >
                        <div className="actions-item__img" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon icon__user" data-v-8e520408>
                                <path d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698
                                6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525
                                1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027
                                5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994
                                4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093
                                21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518
                                3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475
                                14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504
                                19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97
                                22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595
                                19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355
                                11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686
                                7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956
                                3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16
                                7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z" />
                            </svg>
                        </div>
                        <div className="actions-item__text" >Kirish</div>
                    </div>
                </div>
            </div>
            <div className={`menu-catalog ${menu? '_active': null}`}>
                <div className='menu-catalog_container'>
                   <div className="menu-catalog__aside">
                        <div>
                            <div className="menu-catalog__header">
                                <p>Kategoriyalar</p>
                                <Button className="menu-catalog__close">
                                    <CloseIcon onClick={closeHandlerIcon} />
                                </Button>
                            </div>
                            { Catalogs.map(item=>(
                                <ul key={item.id} onClick={(e) => {closeHandler(e)}} onMouseEnter={() => inforHandler(item.id)} to={item.url} className="menu-catalog__item" >
                                    <li>
                                        <Link  style={{cursor: 'pointer'}}>{item.name}  <ExpandMoreIcon className='icons' onMouseEnter={(e) => openHandler(e)} /></Link>
                                    </li>
                                    <ul className='open_sub-item'>
                                        {item.data.map((index, e) => (
                                            <li className='menu-catalog__sub-item' key={e}>
                                                <Link onClick={linkHandler} to={index.url}>{index.name}</Link>
                                            </li>   
                                        ))}
                                    </ul>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="menu-catalog__content">
                        <div className="menu-content">
                               <div className="menu-content__item">
                                        {Catalogs[Id].data.map((item, e) => (
                                            <div key={e}>
                                                <Link style={{fontWeight: 'bold'}} to={item.url}>{item.name}</Link>
                                                <div className="menu-content__sub-item">
                                                    {item.data.map((index, e) => (
                                                        <Link onClick={linkHandler} key={e} to={index.url}>{index.name}</Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomHeader;