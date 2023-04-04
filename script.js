// Récupération du bouton "Envoyer"
const submitButton = document.querySelector("#submit-button");

// Ajout d'un écouteur d'événements pour le clic sur le bouton "Envoyer"
submitButton.addEventListener("click", () => {
  // Récupération des champs de saisie
  const nameField = document.querySelector("#name-field");
  const emailField = document.querySelector("#email-field");
  const messageField = document.querySelector("#message-field");

  // Validation des champs de saisie
  if (nameField.value.trim() === "") {
    alert("Veuillez saisir votre nom");
    return;
  }
  if (emailField.value.trim() === "") {
    alert("Veuillez saisir votre adresse email");
    return;
  }
  if (messageField.value.trim() === "") {
    alert("Veuillez saisir un message");
    return;
  }

  // Si tous les champs sont valides, on affiche un message de confirmation
  alert("Votre message a bien été envoyé !");
});
$(selector, context)