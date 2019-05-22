var MAINAPP = MAINAPP || {};

let $ = (function(app){

    var privateProperty = false;
    var privateProperty2 = [1, 2, 3];
    var publicProperty = "Hello"

    function privateFunction(){
        console.log(privateProperty)
    }

    let publicMethod = function(){
        console.log(privateProperty2)
        return "something"
    }

    app.publicMethod = publicMethod

    return app
})(MAINAPP)

$.publicMethod