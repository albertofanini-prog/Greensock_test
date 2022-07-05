//in 2 secondi
//partono da scale: 0.5
//partono da opacity 0
//delay ritarda la partenza di 0.5
//stagger setta tot tempo tra la partenza di un el e quello successivo
//ease elastic da effetto elastico

gsap.from(".box", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

//per ogni el con classe .box
document.querySelectorAll('.box').forEach(function(box){
    
    //al click su box fai
    box.addEventListener('click', function(){
        gsap.to(".box", {
            duration: 0.5, 
            opacity: 0, 
            y: -100, 
            stagger: 0.1,
            ease: "back.in"
        })
    });
});