/* es5中数据遍历有多少种方法？
*  他们有什么优势和缺点
*  for循环  foreach , map, for .in  every
 */

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// for 循环中可以使用break continue
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if (myArray[i]===2) {
    break;
  }
}
// foreach 不支持 break continu
myArray.forEach((item)=>{
  console.log(item);
});

// every 向下循环的条件值是看 取决于函数体的返回值
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
myArray.every((item)=>{
  if (item===2) {
    return false;
  }
  console.log(item, 'every'); // 这时候只会输出一次
});

// for in 虽然能遍历数组，但是有瑕疵
// myArray.a = 10;
// for (const index in myArray) {  //index 是一个字符串
//   console.log(index, myArray[index], 'forin');
// }

// 可以遍历数组 可以遍历对象
for (const number of myArray) {
  console.log(number, 'forof');
}
// 自定义数据结构 来一瓶最便宜的啤酒，最便宜的火腿肠，最便宜的面包  这里需要前置知识点，修改数据
const Price ={
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  c: [0.5, 0, 5],
};


// es5中如何将伪数组转换成数组 该怎么办 Array.from()
// let args = [].slice.call(arguments) //collection
// let imgs =[].slice.call(document.querySelectAll('img'))
// es6中如何做
// let imgs = Array.from(document.querySelectAll('img'))
// Array.from(arrayLike,mapFn,thisArg)
// 利用Array 快速生成一个数组
const array = Array.from({length: 5}, ()=>1);
console.log(array);

// es5中如何创建一个新数组
const array1 = Array(5);
const array2 = [];
console.log(array1, array2);
// es6中如何创建一个新数组
const array3 = Array.of(1, 2, 59, 9, 0);
console.log(array3);
// Array.fill(value,start,end)
const array4 = Array(10).fill(10);
console.log(array4);
const array5 = [1, 2, 3, 4, 2];
console.log(array5.fill(8, 2, 4));
