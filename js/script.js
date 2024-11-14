
    var tl = gsap.timeline()

    tl.from(".intro .text h1",{
        x: -100,
        duration: 2,
        opacity:0,
        delay: 0.4
    })
    
    tl.from(".intro .text p",{
        x: -100,
        duration: 2,
        opacity:0,
        delay: 0.4
    })
    
    tl.from(".intro .image",{
        x: 100,
        duration: 2,
        opacity:0,
        delay: 0.4
    })
    
    tl.from("header",{
        y: -10,
        duration: 1,
        delay:.5,
        opacity:0
    })
    
    tl.from("nav .link",{
        x: -40,
        duration: 1,
        delay:.1,
        opacity:0,
    })
    
    tl.from("nav .btn-login",{
        x: -40,
        duration: 1,
        delay:.1,
        opacity:0,
    })
    
    tl.from(".intro .text .button",{
        y: -10,
        duration: 1,
        delay:1,
        opacity:0,
    })    
