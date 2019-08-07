// function promiseTask(){
//     return Promise.resolve("this value is ignored")
// }
// exports.default = promiseTask

/**
 * eventEmitterTask
 */
// const { EventEmitter } = require('events')
// function eventEmitterTask(){
//     const emitter= new EventEmitter()
//     setTimeout(()=>emitter.emit("finish"),1000)
//     return emitter
// }

// exports.default = eventEmitterTask

/**
 * child Process
 */
// const { exec } = require('child_process')

// function childProcessTask(){
//     return exec('date')
// }
// exports.default = childProcessTask

/**
 * Observable Task
 */
// const { Observable } = require('rxjs')
// function observableTask(){
//     return Observable.of(1,2,3)
// }

// exports.default = observableTask

/**
 * callback Task
 */
// function callbackTask(cb){
//     cb( new Error("is a error"))
// }
// exports.default = callbackTask

/**
 * async/await task
 */
const fs = require('fs')
async function asyncAwaitTask(){
    const result = fs.readFileSync('package.json')
    console.log(result)
    await Promise.resolve("some result")
}
exports.default = asyncAwaitTask