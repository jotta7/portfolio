//ANIMAÇÕES MENU
function abrirmenu(){
    let barraMenuAberto = document.querySelector("#barra_menu")
    const aberto = document.querySelector('#opem')
    const fechado = document.querySelector('#close')
    if(barraMenuAberto.style.width == "0px"){
        barraMenuAberto.style.width = "180px"
        aberto.style.display = "none"
        fechado.style.display = "block"
    }else{
        barraMenuAberto.style.width = "0px"
        fechado.style.display = "none"
        aberto.style.display = "block"
    }
}

//ANIMAÇÕES HOME PHRASE
let typed = new Typed(".typing", {
    strings: ["...", "Estudante", "Desenvolvedor", "Full Stack", "Designer", "Técnico"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
})

//ANIMAÇOES SCROLL

window.sr = ScrollReveal({ reset: true})


//text about
ScrollReveal( {distance:'60px'}).reveal('.right', {
    delay: 500,
    origin: 'left'
})

//skills
ScrollReveal().reveal('.card', {
    delay: 300,
    interval: 300
})
//hobbies
ScrollReveal().reveal('.card-circle', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
//portfolio

ScrollReveal().reveal('.cards', {
    mobile: false,
    delay: 500,
    interval: 300
})



