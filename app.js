
function displayTime() {
    //Déclaration des variables:
    let now = new Date();
    let anneeActuelle = now.getFullYear();
    let moisActuel = now.getMonth() + 1;
    let jourActuel = now.getDate();
    let heureActuelle = now.getHours();
    let minuteActuelle = now.getMinutes();
    let secondeActuelle = now.getSeconds();
    
    //Récupération des données de temps réel avec ajustement pour un affichage en dizaine:
    annee.innerHTML = anneeActuelle;
    mois.innerHTML = moisActuel > 9 ? moisActuel : "0" + moisActuel;
    jour.innerHTML = jourActuel > 9 ? jourActuel : "0" + jourActuel;
    heures.textContent = heureActuelle > 9 ? heureActuelle : "0" + heureActuelle;
    minutes.textContent = minuteActuelle > 9 ? minuteActuelle : "0" + minuteActuelle;
    secondes.textContent = secondeActuelle > 9 ? secondeActuelle : "0" + secondeActuelle;
    
    //Pour appel de la fonction chaque seconde:
    setTimeout(displayTime, 1000);
  }
  
  displayTime();
  