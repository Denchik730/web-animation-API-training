'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation;
let macbookAnimation;


btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg)',
            filter: 'opacity(100%)'},
            {transform: 'translateY(100px) rotate(180deg)',
            filter: 'opacity(50%)'},
            {transform: 'translateY(-100px) rotate(270deg)',
            filter: 'opacity(75%)'},
            {transform: 'translateY(0) rotate(360deg)',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});


btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([
            {transform: 'translateX(0) rotate(0deg) scale(1)',
            filter: 'opacity(100%)'},
            {transform: 'translateX(100px) rotate(180deg) scale(2)',
            filter: 'opacity(50%)'},
            {transform: 'translateX(-100px) rotate(270deg) scale(3)',
            filter: 'opacity(75%)'},
            {transform: 'translateX(0) rotate(360deg) scale(2)',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (macbookAnimation.playState === 'paused') {
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }
});
