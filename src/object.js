const obj = {
  x:1,
  y:2,
}
console.log(obj)



//Set 数据类型

const s = new Set([1,3,3,2]);
console.log(s,'ssss')


s.add('19');
console.log(s)
s.size; //获取数据的条数
s.delete(1);
console.log(s.has(2))
console.log(s.keys())
console.log(s.values())
console.log(s.entries())

//扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。

s.clear() //删除 所有数据
console.log(s)



//SET 并没有提供改的操作，如果要改，可以先删除再添加



//Map  可以传入可遍历的对象 new Map() 传入的参数对象，必须接受一个key：values、

// MAP的key可以是任意值


const map = new Map();
//添加数据  set方法  map 中的set方法不但有添加数据的功能还有修改数据的功能
map.set(1,1)
console.log(map.get(1));
console.log(map.size)
console.log(map.has(1))
console.log(map,'map')

map.set(2,2);

map.delete(2);

map.set(3,3);
console.log(map)
map.keys();
map.values();
map.entries();
// map.forEach()  map 遍历 Map 的所有成员。
console.log(map.clear())
console.log(map)


// todo map 转为数组

//1 使用扩展运算符 (...)
const myMap = new Map([[1,1],[2,2]]);

console.log(myMap,'myMap')


//todo es5中对象复制

//1 todo Object.assign();

//思考 如果源对象传入的是null,undefined 将会怎样
// 如果对象参数是undefined 和null 又会咋样
// 如果目标对象是一个嵌套对象，子对象的属性会被覆盖吗
