let compteur = 0;

function Deplacer() {
    const clavier = document.getElementById("clavier");
    const affichage = document.querySelector(".affichage");

    const nouveauDiv = document.createElement("div");
    nouveauDiv.innerHTML = clavier.value;

    nouveauDiv.classList.add("texte");

    // Alterne entre les classes 'droite' et 'gauche' selon la valeur du compteur
    if (compteur % 2 === 0) {
        nouveauDiv.classList.add("droite");
    } else {
        nouveauDiv.classList.add("gauche");
    }
    compteur++;

    affichage.appendChild(nouveauDiv);

    clavier.value = "";
}

function ModifierAspectClavier() {
    const clavier = document.getElementById("clavier");

    clavier.style.resize = "vertical";
    clavier.style.overflow = "auto";
    clavier.style.width = "50%";
    clavier.style.minWidth = "400px";
}

function Demarre() {
    ModifierAspectClavier();
}

window.addEventListener("load", Demarre);
