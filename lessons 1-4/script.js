'use strict';


// var number = 5;
// var string = "Hello";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }

// console.log(persone["age"]);

// let arr = ['1.jpg','2.png','3.bmp'];

// console.log(arr[0]);



//!!!!!!!!!!!! Превращаем тип данных в строку

// 1)

// String(что-то)

console.log(typeof(String(4)));

// 2)

// Если что-то прибавить к строке, то выражение будет строкой

console.log(typeof("ww" + 5));
console.log('https://vk.com/catalog/' + 5);


//!!!!!!!!!!!! Превращаем тип данных в число

// 1)
console.log(typeof(Number('4')));
// 2)
console.log(typeof(+"5")); //Унарный плюс который превращает тип данных в число
console.log(typeof(5 + +"5"));
// 3)
console.log(typeof(parseInt('15px', 10)));

// Небольшая проверка если хотим от юзера получить только число, например в prompt
// просто ставим унарный плюс перед выражением
//let ans = +prompt("Hello?", "");

//!!!!!!!!!!!! Превращаем тип данных в строку

// FALSE - 0, '', null, undefined, NaN - все остальное 
// TRUE (пустые массивы, объекты, строки с минимум одним символом)

let swither = 1;

if(swither){
    console.log("Working...");
}

// 1)
console.log(typeof(Boolean('4')));
// 2)
console.log(typeof(!!'4'));








