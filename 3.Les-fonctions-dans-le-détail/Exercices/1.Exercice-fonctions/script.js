/* 
    Exercices : Les fonctions
*/

/* 
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.  
*/

function devideBy5(nbr){

    return nbr / 5;
}

console.log(devideBy5(1997))

const devideBy10 = nbr => nbr / 10

console.log(devideBy10(1000))


/* 
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/

const weather = {
  city: "London",
  temp: 16,
  getFahrenheit(temp){
  return (this.temp* 1.8 ) + 32
}
}



// console.log(weather.getFahrenheit(25))

/* 
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.
  Cette fonction retournera true ou false.
  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
*/

const travelers = [
{
  name: "Jean",
  nationality: "FR"
},
{
  name: "Victor",
  nationality: "FR"
},
{
  name: "Paul",
  nationality: "FR"
},
{
  name: "Jack",
  nationality: "EN"
},
{
  name: "Giulia",
  nationality: "IT"
},
]

function areFromNationality(arr, callback){
  for( const value of arr){
    if(!callback(value)){
      return false ;
    }
  }
  return true;
}

console.log(areFromNationality(travelers, travelers => travelers.nationality === "FR"))
console.log(areFromNationality(travelers, travelers => travelers.nationality === "EN"))
console.log(areFromNationality(travelers, travelers => travelers.nationality === "IT"))
