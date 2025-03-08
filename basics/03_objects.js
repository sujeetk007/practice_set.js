// Singleton

// object literals

const mySymb = Symbol("Key1")

const JsUser = {
    name: "Sujeet",
    "full name": "Sujeet Kumar",
    [mySymb]: "myKey1",
    age: 35,
    location: "Bihar",
    email: "jeet01@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymb]);


JsUser.email = "k_jeet01@gmail.com"
Object.freeze(JsUser)
JsUser.email = "k_jeet01@yahoo.com"

console.log(JsUser);
