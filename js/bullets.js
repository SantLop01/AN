/* Variables para la nevegación de productos */
const slider = document.getElementById('list__products');
const bullets = document.querySelectorAll('.bullets__item');

/* Evitamos el desplazamiento al mover la rueda del mouse */
slider.addEventListener('wheel', (e) => {
    e.preventDefault();
});

/* Función para la nevegación de productos */
bullets.forEach((bullet) => {
    bullet.addEventListener('click', () => {
        const previousBullet = document.querySelector('.bullets__item.active');
        const getPreviousIndex = Array.from(bullets).indexOf(previousBullet);
        const getCurrentIndex = Array.from(bullets).indexOf(bullet);
        previousBullet.classList.remove('active');
        bullet.classList.add('active');

        let totalWidth = slider.scrollWidth;
        let elementWidth = totalWidth / 7;
        slider.style.scrollBehavior = 'smooth';

        if (getPreviousIndex > getCurrentIndex) {
            let toScroll = elementWidth * (getPreviousIndex - getCurrentIndex);
            slider.scrollLeft -= toScroll;
        } else {
            let toScroll = elementWidth * (getCurrentIndex - getPreviousIndex);
            slider.scrollLeft += toScroll;
        };
    });
});


/* Variables para la nevegación de marcas */
const brandsContainer = document.getElementById('list__brands');
const itemsBullets = document.querySelectorAll('.item');

/* Evitamos el desplazamiento al mover la rueda del mouse */
brandsContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
});

/* Función para la nevegación de marcas */
itemsBullets.forEach((item) => {
    item.addEventListener('click', () => {
        const previousBullet = document.querySelector('.item.active');
        const getPreviousIndex = Array.from(itemsBullets).indexOf(previousBullet);
        const getCurrentIndex = Array.from(itemsBullets).indexOf(item);
        previousBullet.classList.remove('active');
        item.classList.add('active');

        let totalWidth = brandsContainer.scrollWidth;
        let elementWidth = totalWidth / 3;
        brandsContainer.style.scrollBehavior = 'smooth';

        if (getPreviousIndex > getCurrentIndex) {
            let toScroll = elementWidth * (getPreviousIndex - getCurrentIndex);
            brandsContainer.scrollLeft -= toScroll;
        } else {
            let toScroll = elementWidth * (getCurrentIndex - getPreviousIndex);
            brandsContainer.scrollLeft += toScroll;
        };
    });
});