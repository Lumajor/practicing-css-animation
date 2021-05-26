const openMenu = (() => {
    const buttonClick = (className) => {
        let elements = document.querySelectorAll('.' + className);
        elements.forEach(element => {
            element.classList.forEach(name => {
                if (name == 'visible') {
                    element.classList.remove('visible') 
                } else {
                    element.classList.add('visible')
                }
            })
        })
    }

    return  { buttonClick }
})();

document.addEventListener('click', (e) => {
    if (e.target.matches("#animationButton")) {
        openMenu.buttonClick('animationItem');
    }
})