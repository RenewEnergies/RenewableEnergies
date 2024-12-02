document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieForm = document.getElementById("cookieForm");
    const welcomeMessage = document.getElementById("welcome-message");

    // Fonction pour lire un cookie par son nom
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    // Vérifie si les cookies "firstName" et "lastName" existent
    const firstName = getCookie("firstName");
    const lastName = getCookie("lastName");

    if (firstName && lastName) {
        // Si les cookies existent, afficher le message de bienvenue
        showWelcomeMessage(firstName, lastName);
    } else {
        // Sinon, afficher la bannière de cookies
        cookieBanner.style.display = "block";
    }

    // Gérer la soumission du formulaire
    cookieForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const firstNameInput = document.getElementById("firstName").value.trim();
        const lastNameInput = document.getElementById("lastName").value.trim();

        if (firstNameInput && lastNameInput) {
            // Stocker les informations dans les cookies (valide 30 jours)
            document.cookie = `firstName=${firstNameInput}; path=/; max-age=${30 * 24 * 60 * 60}`;
            document.cookie = `lastName=${lastNameInput}; path=/; max-age=${30 * 24 * 60 * 60}`;

            // Afficher le message de bienvenue
            showWelcomeMessage(firstNameInput, lastNameInput);

            // Cacher la bannière
            cookieBanner.style.display = "none";
        }
    });

    // Fonction pour afficher le message de bienvenue
    function showWelcomeMessage(firstName, lastName) {
        welcomeMessage.textContent = `Bienvenue ${firstName} ${lastName} !`;
        welcomeMessage.style.display = "block";
    }
});
