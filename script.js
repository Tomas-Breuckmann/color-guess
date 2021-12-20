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

//Função que cria os círculos das opções
function criaBalls(quant){
    let rgbOptions=document.getElementById('rgb-options')
    for(let i=1;i<=quant;i+=1){
        let item = document.createElement('li')
        item.classList.add('ball')
        rgbOptions.appendChild(item)
    }
}
criaBalls(6)

//Função cria a paleta de cores
function paleta([r,g,b]){
    let quant=document.querySelectorAll('.ball')
    console.log(quant)
    let especial=Math.floor(Math.random()*60)%quant.length
    console.log(especial)
    for(let i=0;i<quant.length;i+=1){
        if(i==especial){
            [r,g,b]=corPrincipal()
            console.log([r,g,b])
            quant[i].style.backgroundColor= 'rgb('+r+','+g+','+b+')'
        } else{
            [r,g,b]=criaCor()
            console.log([r,g,b])
            quant[i].style.backgroundColor= 'rgb('+r+','+g+','+b+')'
        }
    }
}
paleta([2,4,25])