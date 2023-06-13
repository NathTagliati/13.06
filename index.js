let contador = 4;

function adicionarCard() {
    const container = document.getElementById('container');
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = 'Card ' + contador;

    contador++

    container.appendChild(card);

}