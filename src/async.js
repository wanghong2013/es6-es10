// async function firstjAsync() {
//   return 27; // 这里相当于 Promise.resolve(27)
// }
//
// firstjAsync().then((val)=>{
//   console.log(val);
// });

// async function secondAsync() {
//   let promise = new Promise(((resolve, reject) => {
//     setTimeout(function () {
//        resolve('now it done')
//     })
//   }))
//   console.log(await promise)
//   console.log(2)
//   return Promise.resolve(3)
// }
//
// secondAsync().then(val=>{
//   console.log(val)
// })

import axios from "axios"

async function getList() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(res)
}

function getHistoryData() {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos', {}).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}


//  getHistoryData().then(res=>{
//   console.log(res)
// })

async function test() {
  const data = await getHistoryData();
  console.log(data)
}

test()



