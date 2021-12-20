// window.onload=function(){
//     let r= Math.floor(Math.random()*255)
//     let g= Math.floor(Math.random()*255)
//     let b= Math.floor(Math.random()*255)
//     console.log('('+r+','+g+','+b+')')
// }

//Função que escolhe randomicamente uma cor
function criaCor(){
    let r= Math.floor(Math.random()*255)
    let g= Math.floor(Math.random()*255)
    let b= Math.floor(Math.random()*255)
    return [r,g,b]
}

//Função que cria o código da cor principal, a ser adivinhada, e mostra
function corPrincipal(){
    [rp,gp,bp]=criaCor()
    let cor='( '+rp+' , '+gp+' , '+bp+' )'
    let rgbColor=document.getElementById('rgb-color')
    rgbColor.innerText=cor
    return [rp,gp,bp]
}
[rp,gp,bp]=corPrincipal()

//Função que cria os círculos das opções
function criaOpcoes(quant){
    let rgbOptions=document.getElementById('rgb-options')
    for(let i=1;i<=quant;i+=1){
        let item = document.createElement('li')
        item.classList.add('ball')
        rgbOptions.appendChild(item)
    }
}
criaOpcoes(6)
