console.log('GS 3');

//gsap.from specifica il punto di partenza
// in due secondi
// parte da x:200 rispetto a posizione originale
// parte con opacità 0
// parte con dimensione scale 0.1
gsap.from(".smile", {
    duration: 2,
    x: 200,
    opacity: 0,
    scale: 0.1,
});

//gsap.fromTo specifica sia il punto di partenza sia quello di arrivo
//parte con width e height 0
//in 1.5 diventa width 100 height 200

// gsap.fromTo(".smile", {
//         width: 0, height: 0
//     }, {
//         duration: 1.5, width: 100, height: 200
// });