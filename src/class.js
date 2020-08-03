// es5中怎么声明一个类

// es6中怎么声明一个类
//https://app.yinxiang.com/shard/s21/nl/6235875/1fd82362-4c5f-4928-ba7c-0eccc4d284c7/

// let Animal = function (type){
//   this.type = type;
// }
// Animal.prototype.eat = function (){
//   console.log('i am eat')
// }
//
// const dog = new Animal('dog')
// console.log(dog);
// dog.eat();
//
// const monkey = new Animal('monkey');
//
// monkey.constructor.prototype.eat = function (){
//   console.log('i am eat banana')
// }
//
// console.log(monkey);
// monkey.eat()
// dog.eat();

// class Animal{
//   constructor(type) {
//     this.type = type;
//
//   }
//   eat(){
//     console.log(' i am eat')
//   }
// }


// class Animal{
//   constructor(type) {
//     this.type = type;
//
//   }
//   get age (){
//     return 4
//   }
//   eat(){
//     console.log(' i am eat')
//   }
// }
//
//
// const dog = new Animal('dog')
//
// console.log(dog.age)
// dog.age = 10;
// console.log(dog)



// 类的静态方法

class Animal{
  constructor(type) {
    this.type = type;

  }

  // 定义静态方法
  static say(){
    console.log('say')
  }
}
const dog = new Animal('dog') //实例调用 say方法会报错
console.log(Animal.say)

