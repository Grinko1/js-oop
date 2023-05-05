//1
// let geom = {
//     name: 'figure',
//     sp:{x:0, y: 0},
//     ep:{x:100, y:20},
//     get nameGeom () {return this.name},
//     set nameGeom (name) {this.name = name}
// }

// let rect = {
//     draw(){
//         console.log('drawing a rectange:' +
//         this.sp.x+","+this.sp.y+","+ this.ep.x+","+this.ep.y)
//     }
// }

// rect.__proto__ = geom

// // console.log(rect.nameGeom);

// rect.name = 'new Figure 123'

// // console.log(rect.nameGeom);

// for (let prop in rect) {
//    if(rect.hasOwnProperty(prop)){console.log(prop + ":" + rect[prop]);}

// }

//2

// let prop = {
//   sp: { x: 0, y: 0 },
//   ep: { x: 100, y: 20 },
//   get coords() {
//       return [this.sp.x, this.sp.y, this.ep.x, this.ep.y]
//   },
//   set coords(coords){
//     this.ep.x = coords[0], this.ep.y = coords[1], this.sp.x = coords[2], this.sp.y = coords[3]
//   }
// };

// function Rect() {
//   this.name = 'figure';
//   this.draw = function () {
//     'drawing fugure:' + this.name;
//   };
// //   this.__proto__ = prop
// // this.prototype = prop
// }
// Rect.prototype = prop;
// let r = new Rect();
// r.prototype = 'hello'
// // r.draw();

// for( let p in r) {
//     console.log(p +':' + r[p]);
// }

//3

// let obj = {}
// let obj1 = new Object()
// console.log(obj.toString());
// console.log(obj1.toString());
// console.log(Object.prototype);

// let obj = Array(1,2,3)
// let obj1 = [1,2,3]
// console.log(obj.toString());
// console.log(obj1.toString());

// String.prototype.toUpperCase = function() {
//     return this
// }
// console.log(str.toUpperCase());

// String.prototype.len = function () {
//   return this.length;
// };
// let str = 'adsd'
// console.log(str.len());

// Полифил - это эмуляция метода. который существует в спецификации JS, но еще не поддерживается текущим движком JS

// let prop = {
//   sp: { x: 0, y: 0 },
//   ep: { x: 100, y: 20 },
//   get coords() {
//     return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
//   },
//   set coords(coords) {
//     (this.ep.x = coords[0]),
//       (this.ep.y = coords[1]),
//       (this.sp.x = coords[2]),
//       (this.sp.y = coords[3]);
//   },
// };

// let rect = Object.create(prop, {
//   name: { value: 'rectangle', writable: true },
//   draw: {
//     value: function () {
//       console.log('drawing figure:' + this.name);
//     },
//   },
// });

// let clone = Object.create(Object.getPrototypeOf(rect), Object.getOwnPropertyDescriptor(rect));

// clone.name = 'clone'
// console.log(clone.name);
// console.log(rect.name);
// console.log(rect.coords);
// console.log(rect.name);
// rect.draw()
// function Rect () {
//     this.name = 'rectangle';
//     this.draw = function () {
//          console.log('drawing figure:' + this.name );
//          this.__proto__ = prop
//     }
// }

// console.log(clone);

// 4

// class Book {
//   pages = 123;
//   constructor(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
//   }
//   getTitle() {
//     return this.title;
//   }
//   setPrice(pr) {
//     this.price = pr;
//   }
//   get authorName() {
//     return this.author;
//   }
//   set authorName(name) {
//     this.author = name;
//   }
// }

// let book1 = new Book('aa', 'bbb', 123);
// let book2 = new Book('qqq', 'www', 723);

// console.log(book2);
// console.log(book2.authorName);
// book2.authorName = 'Turgenev';
// console.log(book2.authorName);

// book1.setPrice(340)
// console.log(book1, book2);
// console.log(book1.getTitle());

//5

// class Prop {
//   constructor(color, width) {
//     this.color = color;
//     this.width = width;
//   }
// }

// class Figure extends Prop {
//   constructor(color, width, height) {
//     super(color, width);
//     this.height = height;
//   }

// }

// let f1 = new Figure('red', 'width' , 'height');
// let f2 = new Figure('width', 'green', 'height');
// console.log(f1);
// console.log(f2);

//!!! need to keep  same sequence  in constructors all and super
// index.js:183 Figure {color: 109, width: 87, height: 'red'}
// Figure {color: 109, width: 'red', height: 87}

// console.log(f1.show());

// class Test {
//     constructor( length, color){
//          this.length = length;
//         this.color = color

//     }
// }
// class Test2 extends Test {
//     constructor(color, length, text){
//         super(color, length);
//         this.text = text
//     }
// }
// let t1 = new Test2('green', 12, 'abs')
// console.log(t1);

// 6

// class User {
//     static countUsers = 0
//   constructor(name, old) {
//       User.countUsers++
//     this.name = name;
//     this.old = old;
//   }
//   getname() {
//     return this.name;
//   }
//   static compareOld(user1, user2) {
//     return user1.old === user2.old;
//   }
// }

// class Admin extends User {
//   constructor(name, old, login, psw) {
//     super(name, old);
//     this.login = login;
//     this.psw = psw;
//   }
//   static createAdmin(name, old) {
//       return new this(name, old, 'admin2', '1111')
//   }
// }
// let u1 = new User('Anna', 34);
// let u2 = new User('Vasya', 32);
// console.log(User.countUsers);
// let a1 = new Admin('Bob', 32, 'abra', 'qwerty');
// console.log(Admin.compareOld(a1, u2));
// console.log(Admin.createAdmin('Rick', 23));

//7
// class User {
//     #name
//     #old
//   constructor(name, old) {
//     this.#name = name;
//     this.#old = old;
//   }
//   _getName() {
//     return this.#name;
//   }
// }

// class Admin extends User {
//     #psw
//   constructor(name, old, login, psw) {
//     super(name, old);
//     this._login = login;
//     this.#psw = psw;
//   }
// }

// let u1 = new User('Iasd', 23);
// // console.log(u1.#name);
// let a1 = new Admin('Arkadfd', 43, 'admin', 'root');
// // console.log(u1._getName());
// // console.log(a1._getName());
// console.log(u1 instanceof Admin );
// console.log(a1 instanceof User);

// 8
// let ShopMixin = {
//   getPrice() {
//     return 0;
//   },
//   getWeight() {
//     return 0;
//   },
//   getSize() {
//     return 0;
//   },
//   getPages() {
//     return 0;
//   },
// };

// class Apple {
//   constructor(price, sort) {
//     this.price = price;
//     this.sort = sort;
//   }
// }
// Object.assign(Apple.prototype, ShopMixin);
// Apple.prototype.getPrice = function () {
//   return this.price;
// };
// class Toy {
//   constructor(price, name) {
//     this.price = price;
//     this.name = name;
//   }
// }
// Object.assign(Toy.prototype, ShopMixin);
// Toy.prototype.getPrice = function () {
//   return this.price;
// };
// class Book {
//   constructor(price, title, pages) {
//     this.price = price;
//     this.title = title;
//     this.pages = pages;
//   }
// }

// Object.assign(Book.prototype, ShopMixin);
// Book.prototype.getPrice = function () {
//   return this.price;
// };
// Book.prototype.getPages = function () {
//   return this.pages;
// };

//9

// let res = 0;

//   setTimeout(() => {
//       try {
//             res = 5 / s;
//       } catch (error) {
//             console.log(error.name);

//       }finally{
//           console.log('finally');
//       }
//   console.log('below  in timeout');
//   }, 0);

// function devide(a, b) {
//   if (b === 0) {
//     throw new Error('Not allowed to devide  to 0');
//   }

//   return a / b;
// }
// // let res = 0
// try {
//   res = devide(2, 1);
//   console.log(res);
// } catch (error) {
//   if (error.name === 'Error') {
//     console.log(error.name, error.message);
//   } else {
//     throw error;
//   }
// }
// console.log(devide(4,0));
