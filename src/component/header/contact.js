import { Button } from '@mui/material';
import React, { useContext, useRef } from 'react';
import {CountContext} from './index';

function Contact() {
    const   [IsTrue, setIsTrue] = useContext(CountContext)
    const inputPhone = useRef();
    const error = useRef();

    function changeHandler() {
        setIsTrue(false)
    }

    function changedHandler() {
        if( inputPhone.current.value.length >= 12 ) {
            error.current.style.display = 'none';
        } 
        if(inputPhone.current.value.length < 12){
            error.current.style.display = 'block';
        }
        if( inputPhone.current.value.length === 0) {
            error.current.textContent = "Telefon raqami maydoni majburiy, to'ldirishingiz lozim"
        }else {
            error.current.textContent  = "Telefon raqami maydonining uzunligi 12 ta bo'lishi lozim"
        }  
    }

    function sendHandler(e) {
        e.preventDefault();
        if( inputPhone.current.value.length >= 12 ) {
            setIsTrue(false)
        } else {
            error.current.style.display = 'block';
        }
    }

  return (
    <div className='popup-wrapper'>
        <div className='popur'>
            <div className="popup__head">
                <div className="popup__title">Tizimga kirish yoki profil yaratish</div>
                <Button onClick={changeHandler} aria-label="close popup" className="popup__close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="icon">
                        <path d="M17.8801 16.0002L26.2801 7.61358C26.5312 7.36251 26.6722 7.02198 26.6722 6.66691C26.6722 6.31185 26.5312 5.97132 26.2801 5.72025C26.029 5.46918 25.6885 5.32812 25.3334 5.32812C24.9783 5.32812 24.6378 5.46918 24.3867 5.72025L16.0001 14.1202L7.61341 5.72025C7.36234 5.46918 7.02182 5.32813 6.66675 5.32813C6.31168 5.32813 5.97115 5.46918 5.72008 5.72025C5.46901 5.97132 5.32796 6.31185 5.32796 6.66691C5.32796 7.02198 5.46901 7.36251 5.72008 7.61358L14.1201 16.0002L5.72008 24.3869C5.59511 24.5109 5.49592 24.6583 5.42823 24.8208C5.36053 24.9833 5.32568 25.1576 5.32568 25.3336C5.32568 25.5096 5.36053 25.6839 5.42823 25.8463C5.49592 26.0088 5.59511 26.1563 5.72008 26.2802C5.84403 26.4052 5.9915 26.5044 6.15398 26.5721C6.31646 26.6398 6.49073 26.6746 6.66675 26.6746C6.84276 26.6746 7.01704 26.6398 7.17952 26.5721C7.342 26.5044 7.48946 26.4052 7.61341 26.2802L16.0001 17.8802L24.3867 26.2802C24.5107 26.4052 24.6582 26.5044 24.8206 26.5721C24.9831 26.6398 25.1574 26.6746 25.3334 26.6746C25.5094 26.6746 25.6837 26.6398 25.8462 26.5721C26.0087 26.5044 26.1561 26.4052 26.2801 26.2802C26.4051 26.1563 26.5042 26.0088 26.5719 25.8463C26.6396 25.6839 26.6745 25.5096 26.6745 25.3336C26.6745 25.1576 26.6396 24.9833 26.5719 24.8208C26.5042 24.6583 26.4051 24.5109 26.2801 24.3869L17.8801 16.0002Z" />
                    </svg>
                </Button>
            </div>
            <div className="popup__body">
                <form onSubmit={(e) => (sendHandler(e))}>
                    <div className="popup__row">
                        <label className="label" >Telefon raqami</label>
                        <div className="phone-input" >
                            <div className="phone-input__prefix">
                                <div className="phone-input__prefix-value">+998</div>
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon" style={{}}>
                                    <path d="M12.7105 15.54L18.3605 9.87998C18.4542 9.78702 18.5286 9.67642 18.5793 9.55456C18.6301 9.4327 18.6562 9.30199 18.6562 9.16998C18.6562 9.03797 18.6301 8.90726 18.5793 8.78541C18.5286 8.66355 18.4542 8.55294 18.3605 8.45998C18.1731 8.27373 17.9196 8.16919 17.6555 8.16919C17.3913 8.16919 17.1378 8.27373 16.9505 8.45998L11.9505 13.41L7.00045 8.45998C6.81309 8.27373 6.55964 8.16919 6.29545 8.16919C6.03127 8.16919 5.77781 8.27373 5.59045 8.45998C5.49596 8.5526 5.42079 8.66304 5.3693 8.78492C5.3178 8.90679 5.291 9.03767 5.29045 9.16998C5.291 9.30229 5.3178 9.43317 5.3693 9.55505C5.42079 9.67692 5.49596 9.78737 5.59045 9.87998L11.2405 15.54C11.3341 15.6415 11.4477 15.7225 11.5742 15.7779C11.7007 15.8333 11.8373 15.8619 11.9755 15.8619C12.1136 15.8619 12.2502 15.8333 12.3767 15.7779C12.5032 15.7225 12.6168 15.6415 12.7105 15.54Z" fill="#111111" />
                                </svg>
                                <div className="phone-input__prefix-list" style={{display: 'none'}}>
                                    <div className="phone-input__prefix-item">+998</div>
                                </div>
                            </div>
                            <input onChange={changedHandler} type="number" ref={inputPhone} required className="input _phone"  minLength='12' />
                        </div>
                        <span role="alert" ref={error} className="validation-error" ></span>
                    </div>
                    <div className="form__btns-right"  style={{display: 'none'}}>
                        <div className="form__btns-btn" >Parolni unutdingizmi?</div>
                    </div>
                    <div className="form__btns-right"  style={{display: 'none'}}>
                        <div className="form__btns-btn" >Parolni kiritish</div>
                    </div>
                    <div className="popup__bottom" >
                        <button type="submit" className="btn btn__red _fw" style={{opacity: '0.5'}}>Tasdiqlash</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact