function Deplacer() {
    const clavier = document.getElementById('clavier');
    const affichage = document.querySelector('.affichage');

    const nouveauDiv = document.createElement('div');
    nouveauDiv.innerHTML = clavier.value; 

    affichage.appendChild(nouveauDiv);

    clavier.value = '';
}

function ModifierAspectClavier() {
    const clavier = document.getElementById('clavier');

    clavier.style.resize = 'vertical';
    clavier.style.overflow = 'auto';
    clavier.style.width = '50%';
    clavier.style.minWidth = '400px';
}

function Demarre() {
    ModifierAspectClavier();
}

window.addEventListener('load', Demarre);