function handleClick() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');
    const header_backside = document.querySelector('.header-menu-backside');



    const menuHasActiveClass = menu.classList.contains('burger-menu-actived');

    if (menuHasActiveClass) {
        menu.classList.remove('burger-menu-actived');
        menu.classList.add('burger-menu-actived-closed');
    } else {
        menu.classList.add('burger-menu-actived');
        menu.classList.remove('burger-menu-actived-closed');
    }

    const burgerMenuHasActiveClass = burger.classList.contains('burger-src-active');

    if (burgerMenuHasActiveClass) {
        burger.classList.remove('burger-src-active');
    } else {
        burger.classList.add('burger-src-active');
    }
    const header_backside_active = header_backside.classList.contains('header-menu-backside');

    if (header_backside_active) {
        header_backside.style.display = 'block';
    }
    if (burgerMenuHasActiveClass) {
        header_backside.style.display = 'none';
    }
}

function main() {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', handleClick);
}

main();

function openFaq() {
    const answear_1 = document.querySelector('.faq-main-text-active-1');
  
    const Answered_1 = answear_1.classList.contains('faq-main-text-active-1');

   
    const AnsweredClose = answear_1.classList.contains('faq-hide');


    if (Answered_1) {
        answear_1.classList.add('faq-hide');
    } else {
        answear_1.classList.remove('faq-hide');
      
    }
    if (AnsweredClose) {
        answear_1.classList.remove('faq-hide');
       
    } else {
        answear_1.classList.add('faq-hide');
       
    }
}
function openFaq2() {
    const answear_2 = document.querySelector('.faq-main-text-active-2');
   
    const Answered_2 = answear_2.classList.contains('faq-main-text-active-2');
  
 
    const AnsweredClose2 = answear_2.classList.contains('faq-hide');


    if (Answered_2) {
        answear_2.classList.add('faq-hide');
    } else {
        answear_2.classList.remove('faq-hide');
      
    }

    if (AnsweredClose2) {
        answear_2.classList.remove('faq-hide');
       
    } else {
        answear_2.classList.add('faq-hide');   
    }
}
function openFaq3() {
    const answear_3 = document.querySelector('.faq-main-text-active-3');
   
    const Answered_3 = answear_3.classList.contains('faq-main-text-active-3');
  
 
    const AnsweredClose3 = answear_3.classList.contains('faq-hide');


    if (Answered_3) {
        answear_3.classList.add('faq-hide');
    } else {
        answear_3.classList.remove('faq-hide');
      
    }

    if (AnsweredClose3) {
        answear_3.classList.remove('faq-hide');
       
    } else {
        answear_3.classList.add('faq-hide');   
    }
}
function openFaq4() {
    const answear_4 = document.querySelector('.faq-main-text-active-4');
   
    const Answered_4 = answear_4.classList.contains('faq-main-text-active-4');
  
 
    const AnsweredClose4 = answear_4.classList.contains('faq-hide');


    if (Answered_4) {
        answear_4.classList.add('faq-hide');
    } else {
        answear_4.classList.remove('faq-hide');
      
    }

    if (AnsweredClose4) {
        answear_4.classList.remove('faq-hide');
       
    } else {
        answear_4.classList.add('faq-hide');   
    }
}
function openFaq5() {
    const answear_5 = document.querySelector('.faq-main-text-active-5');
   
    const Answered_5 = answear_5.classList.contains('faq-main-text-active-5');
  
 
    const AnsweredClose5 = answear_5.classList.contains('faq-hide');


    if (Answered_5) {
        answear_5.classList.add('faq-hide');
    } else {
        answear_5.classList.remove('faq-hide');
      
    }

    if (AnsweredClose5) {
        answear_5.classList.remove('faq-hide');
       
    } else {
        answear_5.classList.add('faq-hide');   
    }
}
function openFaq6() {
    const answear_6 = document.querySelector('.faq-main-text-active-6');
   
    const Answered_6 = answear_6.classList.contains('faq-main-text-active-6');
  
 
    const AnsweredClose6 = answear_6.classList.contains('faq-hide');


    if (Answered_6) {
        answear_6.classList.add('faq-hide');
    } else {
        answear_6.classList.remove('faq-hide');
      
    }

    if (AnsweredClose6) {
        answear_6.classList.remove('faq-hide');
       
    } else {
        answear_6.classList.add('faq-hide');   
    }
}

 

function FaqClick() {
    const question1 = document.querySelector('.faq-block-text-1');
    const question2 = document.querySelector('.faq-block-text-2');
    const question3 = document.querySelector('.faq-block-text-3');
    const question4 = document.querySelector('.faq-block-text-4');
    const question5 = document.querySelector('.faq-block-text-5');
    const question6 = document.querySelector('.faq-block-text-6');
    

    question1.addEventListener('click', openFaq);
    question2.addEventListener('click', openFaq2);
    question3.addEventListener('click', openFaq3);
    question4.addEventListener('click', openFaq4);
    question5.addEventListener('click', openFaq5);
    question6.addEventListener('click', openFaq6);
    

}

FaqClick();


