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

const carouselController = (() => {
    const moveRight = () => {
        console.log('moving right...')
        console.log(document.getElementById('carousel').children)
    }

    return { moveRight }
})

document.addEventListener('click', (e) => {
    if (e.target.matches("#animationButton")) {
        openMenu.buttonClick('animationItem');
    }
})

carouselContainer.addEventListener('click', (e) => {
    if (e.target.matches("#rightArrow")) {
        console.log('yeet')
    }
})
