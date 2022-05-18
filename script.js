
function handleClick() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');

    menu.classList.contains('burger-menu-actived') ? menu.classList.remove('burger-menu-actived') : menu.classList.add('burger-menu-actived');
    burger.classList.contains('burger-src-active') ? burger.classList.remove('burger-src-active') : burger.classList.add('burger-src-active');
}

function main() {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', handleClick);
}

main();