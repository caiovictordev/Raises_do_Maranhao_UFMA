export default function acionamentoButtons(){
    const viewAllPovos = document.getElementById("btn-viewAll")
    const allPovos = document.querySelectorAll(".ativacao")
    const span = document.getElementById("btn_text")
    
    viewAllPovos.addEventListener('click', ()=>{
        allPovos.forEach((povo) =>{
            povo.classList.toggle('ativacao')

            span.innerText = 'Ver menos Povos'
        })
    })
}