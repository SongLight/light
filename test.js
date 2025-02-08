
// 如果是java hook代码 都放到perform中
Java.perform(function (){
    // Java.use 使用哪个类
    var jsonRequest = Java.use("com.dodonew.online.http.JsonRequest");
    console.log("jsonRequest:",jsonRequest);
    jsonRequest.paraMap.implementation = function (a) {
        console.log("paraMap params:", a);
        this.paraMap(a);
    }

    jsonRequest.addRequestMap.overload('java.util.Map', 'int').implementation = function (a, b) {
        console.log("addRequestMap params:", a, b);
        // Java.cast 类型转换
        var c = Java.cast(a, Java.use("java.util.HashMap"));
        console.log("fr params:", c.toString());
        this.addRequestMap(a, b);
    }

    var jsonRequestUtil = Java.use("com.dodonew.online.http.RequestUtil");
    console.log("jsonRequestUtil:",jsonRequestUtil);
    jsonRequestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (a, b, c){
        console.log("encodeDesMap params:",a, b, c);
        var retval = jsonRequestUtil.encodeDesMap(a, b, c);
        console.log("encodeDesMap retval:",retval);
        return retval;
    }

    var jsonRequestMd5 = Java.use("com.dodonew.online.util.Utils");
    console.log("jsonRequestMd5:",jsonRequestMd5);
    jsonRequestMd5.md5.implementation = function (a){
        console.log("md5 params:",a);
        var retval = this.md5(a);
        console.log("md5 retval:",retval);
        return retval;
    }

    var dESKeySpec =Java.use("javax.crypto.spec.DESKeySpec");
    dESKeySpec.$init.overload('[B').implementation = function (a){
        console.log("DESKeySpec params:", a);
        this.$init(a);
    }

    var IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");
    IvParameterSpec.$init.overload('[B').implementation = function (a){
        console.log("IvParameterSpec params:", a);
        this.$init(a);
    }
});