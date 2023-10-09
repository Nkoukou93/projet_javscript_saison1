// Fonction pour générer une opération mathématique aléatoire
function devine(){
  let number01=30;
  let number02=44;
  let reponse=30*44;
  let number=Number(prompt("combien font 30*44:"));
  while (number==reponse){
    alert("Ceci est une  bonne réponse" );

  }
  alert('non');

}
devine();
