// 创建一个可关闭的Proxy
var revocale = Proxy.revocable({},{
    get:function(target,name){
        return "[["+name+"]]"
    }
})
var proxy = revocale.proxy
console.log(proxy.foo)

revocale.revoke()

console.log(proxy.foo) // Type.foo