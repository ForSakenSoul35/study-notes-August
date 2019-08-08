let handler = {
    get:function(target,name){
        console.log(target)// 目标属性
        console.log(name)// 目标属性的值
        // return "hello"
        if(target.hasOwnProperty(name)){
            return target[name]
        }else {
            console.log("not found")
            return
        }
    },
    set:function(target,name,value){
        target[name] = '#'+value
    },
    deleteProperty:function(target,name){
        console.log(target,name)
        console.log("删除name属性")
        delete target[name]
    },
    
}
// 语法格式
var p = new Proxy({},handler)

// p.a = 1
// console.log(p.a)//这是get操作
// delete p.abc

// handler  包含陷阱的占位符对象
// hanler能处理的 get/set/delete/
// 能够代理一些操作 get set  delete defineProperty

// 撤销代理
