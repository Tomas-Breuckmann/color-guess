let placar = 0;

// Função que escolhe randomicamente uma cor
function criaCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

// Função que mosta o código da cor principal, a ser adivinhada
function corPrincipal([rp, gp, bp]) {
  const cor = 'rgb(' + rp + ', ' + gp + ', ' + bp + ')';
  let rgbColor=document.getElementById('rgb-color');
  rgbColor.innerText=cor;
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
function paleta(){
    let quant=document.querySelectorAll('.ball')
    let especial=Math.floor(Math.random()*60)%quant.length
    for(let i=0;i<quant.length;i+=1){
        // quant[i].addEventListener('click',adivinha())
        if(i==especial){
            [r,g,b]=criaCor()
            corPrincipal([r,g,b])
            quant[i].style.backgroundColor= 'rgb('+r+','+g+','+b+')'
        } else{
            [r,g,b]=criaCor()
            quant[i].style.backgroundColor= 'rgb('+r+','+g+','+b+')'
        }
    }
}
paleta()

function adivinha(){
    let quant=document.querySelectorAll('.ball')
    let rgbColor=document.getElementById('rgb-color').innerText
    for(let i=0;i<quant.length;i+=1){
        quant[i].addEventListener('click',function(event){
            let corClicada = event.target.style.backgroundColor
            // console.log(corClicada)
            if(corClicada==rgbColor){
                document.getElementById('answer').innerText='Acertou!'
                placar += 3
                document.getElementById('score').innerText=placar
            } else {
                document.getElementById('answer').innerText='Errou! Tente novamente!'
            }
        })

    }
}
adivinha()

function newGame(){
    document.getElementById('answer').innerText='Escolha uma cor'
    paleta()
    adivinha()
}
let newGameButton=document.getElementById('reset-game')
newGameButton.addEventListener('click',newGame)