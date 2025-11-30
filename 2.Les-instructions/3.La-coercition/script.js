/* 
    1. En JavaScript, certaines valeurs vont être converties en valeurs d'un autre type lorsqu'on les utilise dans des opérations ou des conditions, c'est la coercition de type. (type coercion).
*/

const nb1 = 150;
const nb2 = "150";

const user1 = {
    name : "Oscar",
    admin : true,
    age : 21,
    position : "CEO"
}
const user2 = {
    name : "Prince",
    admin : false,
    age : 51,
    position : "Employer"
}

function checkPermission(user){
    if( user.age >= 18 && user.admin && user.position === "CEO" || user.position === "employer"){
        return "Welcom";
    }else{
        return "accès refusé";
    }
}
console.log(checkPermission(user2))