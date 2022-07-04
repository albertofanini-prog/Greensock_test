console.log('Test greensock 2');

CSSPlugin.defaultTransformPerspective = 400;

//durata
//rotazione su asse x(da sopra a sotto)
//movimento a destra(x) e basso(y): obliquo da alto sx a basso dx
//scala
gsap.to('.green', {
    duration: 3,
    rotationX: 360,
    x: 375,
    // y: 200,
    scale: 1.3
});

// durata
// rotazione su asse Y (da dx a sx)
// scala width x4
// movimento basso(y) di 400px
gsap.to('.orange', {
    duration: 3,
    rotationY: 360,
    scaleX: 2.5,
    y: 200,
    borderRadius: '75px'
});

//durata
//movimento negativo(sx)
//skew di 45
gsap.to('.grey', {
    duration: 3,
    x: -350,
    // y: 150,
    skewX: 45,
});