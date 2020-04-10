function hello () {
    var name = 'yjw'
    this.setName = function(thyName) {
        name = thyName
    }
    this.sayName = function() {
        console.log('你好，' + name)
    }
}
module.exports = hello;