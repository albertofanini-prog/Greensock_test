//scale: dimensione
//y: sposta su asse y
//yoyo: effetto yoyo
//repeat negativo: ripete in loop

gsap.to('.box', 1, {
    scale: 0.1,
    y: -100,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    delay: 1,
    stagger: {
        amount: 1.5,
        grid: 'auto',
        from: 'center'
    }
});