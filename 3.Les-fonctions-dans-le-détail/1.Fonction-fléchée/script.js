/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

function getSquareArea1(side){
    return side * side;
}




const getSquareArea = side => side * side;

console.log(getSquareArea(10));
console.log(getSquareArea1(5));