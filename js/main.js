console.log('hello parcel')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()

// @babel/plugin-transform-runtime 해당 패키지를 설치해야 babel에서 async/await를 사용 할 수 있다.

