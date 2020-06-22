// es5中的回调地狱了解吗？
console.log('promise');

// function loadScript(src) {
//   return new Promise((resolve, reject)=>{
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = ()=>resolve(src);
//     script.onerror = ()=>reject(src);
//
//     document.body.append(script);
//   });
// }
// es5是如何通过异步操作来实现的呢


const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then((res)=>{
  console.log(res);
});
