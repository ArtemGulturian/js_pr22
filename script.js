'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// class Userr {
//     constructor (name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User ('Ivan', 28);
// const alex = new User ('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

// ivan.hello();
// alex.hello();

// //-----------------------------------

// // function showThis () {
// //     console.log(this); // undefind
// // }
// // showThis();

// // 1) бычная функция: this = window.
// // но если стоит use strict - будет undefind;

// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//         console.log();
//             return a + b;
//     }

//     console.log(sum);
// }
// showThis(4, 5);

// //---------------

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//     console.log(this);
//     }
// };
// obj.sum();

// // 2) контекст у методов объекта - сам объект.

// //------------------------

// function User (name, id) {
//     this.name = name;
//     this.id = id;
//         this.human = true;
//         this.hello = function () {
//             console.log("Hello " + this.name);
//         };
// }
// let ivan = new User ('Ivan', 23);

// // 3) this в конструкторах и класах - это новый экземпляр объекта

//-------------------------

// function sayNname() {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'John'
// };

// sayNname.call(user, 'Smith');
// sayNname.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// 4) ручная привязка this: call, applay, bind.

//------------------------------------

const btn = document.querySelector('.button');

btn.addEventListener('click', function() {
    // console.log(this); //<button></button>
    this.style.backgroundCOlor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();