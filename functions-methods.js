// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;

// let suma;
// suma = a + b;
// console.log("Primera suma", suma);
// suma = c + d;
// console.log("Segunda suma", suma);

// function sum(a, b) {
//     console.log("Suma de a + b", a + b);
// }
// sum(c, d); // 3

// const sumWithArrowFunction = (a, b) => {
//     return a + b;
// };
// console.log("Suma con arrow function", sumWithArrowFunction(a, b));

// const sumImplicit = (c, d) => c + d;

// console.log("Suma implicita", sumImplicit(c, d));

const users = [
    {
        id: 1,
        userName: "Fabi",
        userLastName: "Tureo",
    },
    {
        id: 2,
        userName: "Melina", // Le Aplico toLowerCase -- melina
        userLastName: "Lencinas",
    },
    {
        id: 3,
        userName: "Guillermo",
        userLastName: "Scharf",
    },
    {
        id: 4,
        userName: "Emi",
        userLastName: "Salias",
    },
];

// const usersNames = [];

// for (let i = 0; i < users.length; i++) {
//     usersNames.push(users[i].userName);
// }
// console.log("Array de Nombres", usersNames);

// const usersNamesMap = users.map((user) => {
//     return user.userName;
// });
// console.log("Username con map", usersNamesMap);

// const usersNamesMapImplicit = users.map((user) => user.userName);
// console.log("Implicit", usersNamesMapImplicit);

// const usersLastNames = users.map(
//     (user) => `${user.userName} ${user.userLastName}`
// );
// console.log("Users", usersLastNames);

// const usersLessThanThree = users.filter((user) => user.id < 3);
// console.log("Users less than 3", usersLessThanThree);

// const usersGreaterThanTwo = users.filter((user) => 2 < user.id);
// console.log("Users greater than 2", usersGreaterThanTwo);

// const obtainUser = users.filter(
//     (user) => user.userName.toLowerCase() === "guillermo"
// );
// console.log("ObtainUser", obtainUser);

// const gameList = [
//     {
//         id: 1,
//         title: "Returnal",
//         platform: "PS5",
//         price: 79,
//     },
//     {
//         id: 2,
//         title: "Resident Evil Village",
//         platform: "PC",
//         price: 59,
//     },
//     {
//         id: 3,
//         title: "Little Nightmares 2",
//         platform: "PC",
//         price: 20,
//     },
//     {
//         id: 4,
//         title: "Returnal",
//         platform: "PS5",
//         price: 179,
//     },
// ];

// const gameTitles = gameList.map((game) => game.title);
// console.log("Game Titles", gameTitles);

// const gamePrices = gameList.filter((game) => game.price < 60);
// console.log("Game Prices", gamePrices);

// const gamesForBuy = gameList
//     .filter((game) => game.price < 60)
//     .map((game) => game.title);

// console.log("Games for buy", gamesForBuy);

// const obtainReturnal = gameList.find(
//     (game) => game.title.toUpperCase() === "RETURNAL"
// );
// console.log("Obtain Returnal", obtainReturnal);

// const names = ["Fabi", "Melina", "Guillermo", "Emi"];

// const firstPosition = names[0];
// const secondPosition = names[1];
// const thirdPosition = names[2];
// const fourthPosition = names[3];

// console.log("First Position", firstPosition);
// console.log("Second Position", secondPosition);
// console.log("Third Position", thirdPosition);
// console.log("Fourth Position", fourthPosition);

// //ECMAScript 6
// // Destructuring of an array
// const [first, second, third, fourth] = names;

// console.log("First Position", first);
// console.log("Second Position", second);
// console.log("Third Position", third);
// console.log("Fourth Position", fourth);

const userGuille = {
    id: 3,
    userName: "Guillermo",
    userLastName: "Scharf",
};

const idDestructuring = userGuille.id;
const userNameDestructuring = userGuille.userName;
const userLastNameDestructuring = userGuille.userLastName;

console.log("Id", idDestructuring);
console.log("User Name", userNameDestructuring);
console.log("User Last Name", userLastNameDestructuring);

const { id: idUser, userName, userLastName } = userGuille;

// console.log("Id ", id);
console.log("idUser", idUser);
console.log("User Name ", userName);
console.log("User Last Name ", userLastName);

function getUser(user) {
    return `${user.userName} ${user.userLastName}`;
}

function getUserDestructuring2(user) {
    const { userName, userLastName } = user;
    return `${userName} ${userLastName}`;
}

function getUserDestructuring({ userName, userLastName }) {
    return `${userName} ${userLastName}`;
}

const names = ["Fabi", "Melina", "Guillermo", "Emi"];
const otherNames = ["Sofia", "Fabricio", "Deborah", "Nacho"];
const otherNamesAgain = ["Paloma", "Fernando", "Celeste", "Javier"];

const totalNames = names.concat(otherNamesAgain, otherNames);
console.log("Total Names", totalNames);

const totalNamesSpread = [...names, ...otherNames, ...otherNamesAgain];
console.log(totalNamesSpread);

const updateGuille = {
    ...userGuille,
    userEmail: "guille@skillfactory.com",
};

console.log("Update Guille", updateGuille);
