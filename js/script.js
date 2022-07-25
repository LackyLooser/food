// 'use strick';
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(()=>openModal(modalTimerId), 300000);
    tabs();
    timer('2022-08-11');
    modal();
    cards();
    forms();
    slider();
    calc();
    
    
          
});