// console.log('First test Greensock');

//gsap.to identica l'elemento
//duration: durata del movimento
//x: sposta su asse x, y: sposta su asse y
//borderRadius: imposta il border radius
//rotation: ruota l'elemento
//slcae: scala l'elemento
//opacity: opacizza l'elemento
gsap.to('.github',{
    duration: 2,
    x: 250,
    backgroundColor: '#154F30',
    borderRadius: '9999px',
    border: '3px solid #154F30',
    rotation: 360,
    scale: 1.5
});


gsap.to('.vs',{
    duration: 2,
    x: -250,
    backgroundColor: '#9F4FA3',
    borderRadius: '9999px',
    border: '3px solid #9F4FA3',
    rotation: 360,
    scale: 1.5
});