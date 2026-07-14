// =====================================================
// INSCRIPTION
// =====================================================

function inscrireUtilisateur() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    let utilisateur = {
        nom: username,
        motdepasse: password
    };

    localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

    alert("Inscription réussie 🎉");

    window.location.href = "seconnecter.html";
}



// =====================================================
// CONNEXION
// =====================================================

function connecterUtilisateur() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    if (utilisateur &&
        username === utilisateur.nom &&
        password === utilisateur.motdepasse
    ) {

        alert("Connexion réussie ✅");

        window.location.href = "../bienvenue/accueil.html";
    } else {
        alert("Nom ou mot de passe incorrect ❌");
    }
}



// =====================================================
// ACCUEIL → BIENVENUE
// =====================================================

function allerBienvenue() {
    window.location.href = "../Bienvenue/bienvenue.html";
}



// =====================================================
// BIENVENUE
// =====================================================

function afficherBienvenue() {

    let utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

    if (!utilisateur) {
        window.location.href = "../Connexion/seconnecter.html";
        return;
    }

    let zone = document.getElementById("user");

    if (zone) {
        zone.innerHTML = "Bienvenue " + utilisateur.nom + "😊👐";
    }
}



// =====================================================
// PROTECTION PAGES
// =====================================================

function afficherNomUtilisateur() {

    let utilisateur =
    JSON.parse(
        localStorage.getItem("utilisateur")
    );

    if (utilisateur) {

        document.getElementById("user").innerHTML =
        "Bienvenue " + utilisateur.nom + "! 😊👐";
    }
}


// =====================================================
// DECONNEXION
// =====================================================

function deconnexion() {

    localStorage.removeItem("utilisateur");

    alert("Déconnexion réussie 👋");

    window.location.href = "../Accueil/accueil.html";
}



// =====================================================
// ACCUEIL
// =====================================================

function allerAccueil() {
    window.location.href = "../Accueil/accueil.html";
}



// =====================================================
// VIES
// =====================================================

let vies = 3;

function afficherVies() {

    let zone = document.getElementById("vies");

    if (zone) {
        zone.innerHTML = "❤️ Vies : " + vies;
    }
}



// =====================================================
// QUIZ LOGIQUE
// =====================================================

function verifierReponse(bouton, bonneReponse) {

    let choix = bouton.innerText;

    if (choix === bonneReponse) {

        bouton.classList.add("correct");
        alert("Bonne réponse 🎉");

    } else {

        vies--;
        afficherVies();

        bouton.classList.add("wrong");

        alert("Mauvaise réponse ❌\n\nBonne réponse : " + bonneReponse);

        if (vies <= 0) {

            alert("Tu n'as plus de vies 😢");

            vies = 3;
            afficherVies();

            alert("❤️ Vies renouvelées");
        }
    }
}



// =====================================================
// AFFICHER QUIZ
// =====================================================

function afficherQuiz(quiz) {

    let zone = document.getElementById("quiz");

    if (!zone) return;

    zone.innerHTML = "";

    quiz.forEach(function (q, index) {

        let bloc = document.createElement("div");
        bloc.classList.add("quiz-card");

        let question = document.createElement("h3");
        question.innerText = (index + 1) + ". " + q.question;

        bloc.appendChild(question);

        q.propositions.forEach(function (prop) {

            let bouton = document.createElement("button");

            bouton.innerText = prop;
            bouton.classList.add("quiz-btn");

            bouton.onclick = function () {
                verifierReponse(this, q.bonne);
            };

            bloc.appendChild(bouton);
        });

        zone.appendChild(bloc);
    });
}



// =====================================================
// QUIZ LEÇON 1
// =====================================================

const quizlecon1 = [
{
    question: "Que signifie bit ?",
    propositions: ["Binary digit", "Bloc internet", "Base ordinateur"],
    bonne: "Binary digit"
},
{
    question: "Une bit peut avoir :",
    propositions: ["2 et 1", "0 et 1", "A et B"],
    bonne: "0 et 1"
},
{
    question: "Un mot est :",
    propositions: ["Une souris", "Un écran","Un ensemble de bits"],
    bonne: "Un ensemble de bits"
}
];



// =====================================================
// QUIZ LEÇON 2A
// =====================================================

const quizlecon2a = [
{ question: "Le système décimal utilise :", propositions: ["15 chiffres", "2 chiffres", "10 chiffres"], bonne: "10 chiffres" },
{ question: "Le système binaire utilise :", propositions: ["0 et 1", "0 à 9", "A à F"], bonne: "0 et 1" },
{ question: "Le système hexadécimal utilise :", propositions: ["0 à 7", "0 et 1","0 à 9 et A à F"], bonne: "0 à 9 et A à F" }
];



// =====================================================
// QUIZ LEÇON 2B
// =====================================================

const quizlecon2b = [
{ question: "Le système binaire est en base :", propositions: ["4", "8", "2"], bonne: "2" },
{ question: "L’ordinateur comprend :", propositions: ["Le binaire", "Le français", "L’anglais"], bonne: "Le binaire" },
{ question: "Le système binaire utilise :", propositions: ["0 et 5", "A à Z", "0 et 1"], bonne: "0 et 1" }
];



// =====================================================
// QUIZ LEÇON 2C
// =====================================================

const quizlecon2c = [
{ question: "2 en binaire vaut :", propositions: ["2", "9", "10"], bonne: "10" },
{ question: "Il est conseillé d’utiliser :", propositions: ["3 bits", "1 bit", "10 bits"], bonne: "3 bits" },
{ question: "10 en binaire vaut :", propositions: ["101", "1010", "111"], bonne: "1010" }
];



// =====================================================
// QUIZ LEÇON 2D
// =====================================================

const quizlecon2d = [
{ question: "Le système octal utilise :", propositions: ["0 à 9", "0 à 7", "A à F"], bonne: "0 à 7" },
{ question: "Le système octal est en base :", propositions: ["4", "2", "8"], bonne: "8" },
{ question: "Chaque position correspond à :", propositions: ["Une puissance de 8", "Une puissance de 2", "Une puissance de 10"], bonne: "Une puissance de 8" }
];



// =====================================================
// QUIZ LEÇON 2E
// =====================================================

const quizlecon2e = [
{ question: "Le système hexadécimal utilise :", propositions: ["4 symboles", "16 symboles", "2 symboles"], bonne: "16 symboles" },
{ question: "A en hexadécimal vaut :", propositions: ["10", "1", "16"], bonne: "10" },
{ question: "F en hexadécimal vaut :", propositions: ["5", "6", "15"], bonne: "15" }
];



// =====================================================
// QUIZ LEÇON 3A
// =====================================================

const quizlecon3a = [
{ question: "La conversion décimale permet de passer en :", propositions: ["Base 16", "Base 10", "Base 8"], bonne: "Base 10" },
{ question: "Le comptage se fait :", propositions: ["Droite vers gauche", "Gauche vers droite", "Haut vers bas"], bonne: "Droite vers gauche" },
{ question: "Les indices représentent :", propositions: ["Exposants", "Divisions", "Restes"], bonne: "Exposants" }
];



// =====================================================
// QUIZ LEÇON 3B
// =====================================================

const quizlecon3b = [
{ question: "Conversion en base 10 se fait par quelle operation :", propositions: ["Division", "Addition", "Multiplication"], bonne: "Division" },
{ question: "Division s’arrête quand :", propositions: ["Résultat 7", "Résultat 1", "Résultat 0"], bonne: "Résultat 0" },
{ question: "Restes se lisent :", propositions: ["Bas vers haut", "Haut vers bas", "Gauche vers droite"], bonne: "Bas vers haut" }
];



// =====================================================
// QUIZ LEÇON 4A
// =====================================================

const quizlecon4a = [
{ question: "Le binaire comprend :", propositions: ["0 et 8", "0 et 1", "A-Z"], bonne: "0 et 1" },
{ question: "Bit =", propositions: ["0 ou 1", "Lettre", "Mot"], bonne: "0 ou 1" },
{ question: "Base :", propositions: ["20", "0", "2"], bonne: "2" }
];



// =====================================================
// QUIZ LEÇON 4B
// =====================================================

const quizlecon4b = [
{ question: "Octet =", propositions: ["16 bits", "8 bits", "28 bits"], bonne: "8 bits" },
{ question: "Bit =", propositions: ["Unité", "Fichier", "Programme"], bonne: "Unité" },
{ question: "Octet code :", propositions: ["Caractère", "Image entière", "Logiciel"], bonne: "Caractère" }
];



// =====================================================
// QUIZ LEÇON 4C
// =====================================================

const quizlecon4c = [
{ question: "1 octet =", propositions: ["6 bits", "8 bits", "2 bits"], bonne: "8 bits" },
{ question: "Données =", propositions: ["Bil", "Lettres", "Bits"], bonne: "Bits" },
{ question: "Machine =", propositions: ["Binaire", "Français", "HTML"], bonne: "Binaire" }
];



// =====================================================
// QUIZ LEÇON 5A
// =====================================================

const quizlecon5a = [
{ question: "Mots mémoire :", propositions: ["Nombres", "Souris", "Écrans"], bonne: "Nombres" },
{ question: "0010 =", propositions: ["2²","2¹", "2³"], bonne: "2¹" },
{ question: "1010 =", propositions: ["2", "4", "10"], bonne: "10" }
];



// =====================================================
// QUIZ LEÇON 5B
// =====================================================

const quizlecon5b = [
{ question: "4 en binaire :", propositions: ["0101", "0011", "0100"], bonne: "0100" },
{ question: "10 en binaire :", propositions: ["0010", "1000", "1010"], bonne: "1010" },
{ question: "1000 vaut :", propositions: ["2", "8", "12"], bonne: "8" }
];



// =====================================================
// QUIZ LEÇON 6
// =====================================================

const quizlecon6 = [

{
    question: "Pourquoi utilise-t-on ces groupes 12, 13 et 14 ?",

    propositions: [

        "Pour créer des images",
        "Pour écrire plus vite en français",
        "Pour représenter les lettres en langage machine"
    ],

    bonne: "Pour représenter les lettres en langage machine"
},



{
    question: "Écrivez en langage binaire : BILL",

    propositions: [

        "1101 1001 1100 1001 1101 1000 1100 1001 ",
        "1100 0010 1100 1001 1101 0011 1101 0011",
        "1101 1001 1100 1001 1101 1000 1100 1001 "
    ],

    bonne: "1100 0010 1100 1001 1101 0011 1101 0011"
},



{
    question: " 12, 13 et 14 représentent quelles lettres ?",

    propositions: [

        "12 = A à J, 13 = K à S, 14 = T à Z",
        "12 = A à I, 13 = J à R, 14 = S à Z",
        "12 = A à H, 13 = I à P, 14 = Q à Z"
    ],

    bonne: "12 = A à J, 13 = K à S, 14 = T à Z"
}

];
 