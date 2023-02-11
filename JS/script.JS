const Bcriar = document.getElementById('Bcriar')
let GuardarNum = [];

Bcriar.addEventListener('click', (e) => {
    e.preventDefault()
    const valor = document.getElementById('texto').value
    getRandom(valor)
})

function getRandom(max){
    var S = 0;
    var N = Math.floor(Math.random() * max + 1);
    GuardarNum.push(N);
    for(i=0;i<GuardarNum.length; i++){S = S + GuardarNum[i]}
    window.document.getElementById('pSoma').innerText=GuardarNum;
    window.document.getElementById('pSoma2').innerText=S;
}

function RESET(){
    window.document.getElementById('pSoma').innerText=0; 
    GuardarNum=[]; 
    window.document.getElementById('pSoma2').innerText=0;
}