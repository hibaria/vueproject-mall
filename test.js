// //父类
// class People {
//   constructor(name) {
//     this.name = name
//   }
//   eat() {
//     console.log(`${ this.name } eat something`)
//   }
// }
// //子类
// class Student extends People {
//   constructor(name, number) {
//     super(name)
//     this.number = number
//   }
//   sayHi() {
//     console.log(`姓名:${ this.name } 学号:${ this.number }`)
//   }
// }
// //实例
// const xialuo = new Student('夏洛', 100)
// xialuo.sayHi()
// function getUrlParam(sUrl, sKey) {
//   var paramString = sUrl.split('?')[1].split('#')[0]
//   var params = paramString.split('&')
//   var res = []
//   var temp={}
//   for (item of params) {
//     if (item.split('=')[0] == sKey) {
//       res.push(item.split('=')[1])
//     }
//     if(temp[item.split('=')[0]]){
//       temp[item.split('=')[0]].push(item.split('=')[1])
//     }
//     else{
//       temp[item.split('=')[0]]=item.split('=')[1]
//     }
//   }
//   if (res.length < 1) {
//     return temp
//   }
//   else if (res.length == 1) {
//     return res[0]
//   }
//   else {
//     return res
//   }
// }
function bindThis(f, oTarget) {
  return function () {
    oTarget.f = f
    console.log(Array.prototype.slice.call(arguments))
    console.log(...arguments)
    return oTarget.f(Array.prototype.slice.call(arguments))
  }
}


var f=function(a, b){
  return this.test + a + b
}
var obj={ test: 2 }

var fun = bindThis(f, obj)

console.log(fun(2, 3) === 7);
// }