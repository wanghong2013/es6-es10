// 问题1  es5中如何处理函数的默认值


//es5中通过arguments来获取所有参数, es6中禁止使用arguments;
function fn1(){
  console.log(arguments)
  //arguments 是一个类数组
}

//es5 处理函数的默认值
function fn11(x,y,z){
  if(y===undefined){
    y = 1;
  }
  console.log(y)
}

fn11(1,undefined,1)

fn1(12,3);


//es6中通过...reset剩余参数来处理函数的剩余参数
function fn2(a,...reset){
  //reset 是一个数组
  console.log(a)
  console.log(reset)
}

fn2(1,2,3,4,5)

//es6处理函数默认值
function fn22(x=10,y=10,z=0){
  console.log(x,y,z)
}

fn22()




//应用场景，函数的参数是固定，但是传入的参数一个数组里的所有元素


//计算三角形周长

const data = [4,5,5];
function sum(x,y,z){
  return x+y+z;
}

console.log(sum.apply(this,data));

console.log(sum(...data),'数组解构')



//4 箭头函数=>  (参数)=>{}

//4.1普通函数和箭头函数的区别

// 箭头函数的this的指向，指的是写代码的时候this的指向，普通函数的this的执行，是指被调用的时候this的指向
const handleFn = ()=>{

}




//练习1 如何用箭头函数来实现 一个数组排序的的问题

//练习2 箭头函数对this的处理 还有什么妙用 
