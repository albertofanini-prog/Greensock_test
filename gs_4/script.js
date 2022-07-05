console.log('GS 4');

//.set imposta le proprietà prima del caricamento
gsap.set('.fantozzi', {
    borderRadius: '9999px',
});

//ease è il tipo di movimento che deve fare l'el
//https://greensock.com/ease-visualizer/
gsap.to('.fantozzi', {
    duration: 2,
    y: 150,
    ease: 'bounce',
    repeat: -1
});