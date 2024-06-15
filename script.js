
const logos = document.querySelector('.logos');

const logosChilds = logos.querySelectorAll('div');

logosChilds.forEach(logosChild => {

    let childsChildrens = logosChild.querySelectorAll('div');

    childsChildrens.forEach(childsChildren => {
        childsChildren.className = 'p-4';
    });
});

function marqueAnimation() {
    gsap.to(document.querySelector('.logos'), {
        x: '-100%',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

marqueAnimation();

const collection = document.querySelector('.collection');

const collectionChilds = collection.querySelectorAll('div');

collectionChilds.forEach(collectionChild => {
    collectionChild.classList.add('mb-3');
});

const socialDiv = document.querySelector('.social-div');

const socialDivChildrens = socialDiv.querySelectorAll('div');

socialDivChildrens.forEach(socialDivChildren => {
    let iconElement = socialDivChildren.querySelector('i');

    socialDivChildren.addEventListener('mouseenter', function () {
        gsap.to(iconElement, {
            y: -3
        });
    });

    socialDivChildren.addEventListener('mouseleave', function () {
        gsap.to(iconElement, {
            y: 0
        });
    });
});