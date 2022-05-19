
function handleClick() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');
     const header_backside=document.querySelector('.header-menu-backside');



    const menuHasActiveClass = menu.classList.contains('burger-menu-actived'); 

    if(menuHasActiveClass) {
        menu.classList.remove('burger-menu-actived');
        menu.classList.add('burger-menu-actived-closed');
    } else {
        menu.classList.add('burger-menu-actived');
        menu.classList.remove('burger-menu-actived-closed');
    }

    const burgerMenuHasActiveClass = burger.classList.contains('burger-src-active');

    if(burgerMenuHasActiveClass) {
        burger.classList.remove('burger-src-active');
    } else {
        burger.classList.add('burger-src-active');
    }
    const header_backside_active = header_backside.classList.contains('header-menu-backside');

    if(header_backside_active) {
        header_backside.style.display='block';
    } 
    if(burgerMenuHasActiveClass){
        header_backside.style.display='none';
    }
}

function main() {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', handleClick);
}

main();

function mobileCard(){
    const cardMobile=document.querySelector('.team-block-wrapper');
    cardMobile.addEventListener('touchstart',()=>{
        cardMobile.add('.mobile-card-rotate');
    });
}
mobileCard();
