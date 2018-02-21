###### Promise 对象的三种状态
* 未完成(pending)
* 已完成(fulfilled)
* 失败(rejected)
顺序不可逆，只能从未完成到已完成或者从未完成到失败，不能已完成又失败，过程只能发生一次

###### A+规范
- A+规范通过术语thenable 来区分promise对象
- A+定义 onFulfilled/onRejected必须是作为函数来调用，而且调用过程必须是异步的
- A+严格定义了then方法链式调用时，onFulfilled/onRejected的调用顺序

```
Jquery的$.Deferred()方法也是Promise，但不是标准的Promise规范的实现，
因为Jquery的then()方法返回的Promise不是一个新的Promise,而是去修改当前Promise的状态，
但是规范是严格规定状态之间的过渡是不可逆的
```

promiseObj.then(onFulfilled,onRejected)方法必须返回一个Promise对象，接受两个参数，一个是成功时的回调函数，一个是失败时的回调函数，这两个都可以省略
成功的回调函数，第一个参数是上一个Promise的值

### Promise库
- bluebird
- Q
- then.js
- es6-promise
