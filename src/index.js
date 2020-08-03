console.log(123);


// 作用域

// eslint-disable-next-line require-jsdoc
function test() {
  const a = 3;
  // eslint-disable-next-line require-jsdoc
  function test2() {
    return a+ 4;
  }
  return test2();
}

console.log(test());
// 请问下面的代码输出是什么？  如何能根据i的顺序输出
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// 3 3 3

for (let i = 0; i <3; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

// 0,1,2

// 请问下面的代码会发生什么

// eslint-disable-next-line max-len
// console.log(b); Uncaught ReferenceError: Cannot access 'b' before initialization
// eslint-disable-next-line no-unused-vars
const c = 10;

