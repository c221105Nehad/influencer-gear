
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