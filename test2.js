
Java.perform(function (){

    function showStacks(){
        console.log(Java.use('android.util.Log').getStackTraceString(
            Java.use('java.lang.Throwable').$new()
        ));
    }
    // 调用系统常用函数，map
    var hashMapHook = Java.use('java.util.HashMap');
    hashMapHook.put.implementation = function (a, b){
        if(a.equals("username")){
            showStacks();
            console.log("hashMap.put:", a, b);
        }
        return this.put(a, b);
    }
    // 调用系统常用函数，list
    var arrayListHook = Java.use('java.util.ArrayList');
    arrayListHook.add.overload('java.lang.Object').implementation = function (a){
        var retval = null;
        try{
            retval  = Java.cast(a, Java.use("java.lang.String"));
            if(retval.equals("username=666666666666")) {
                showStacks();
            }
            console.log("ArrayList.add:", retval);
        } catch (e){
        }
        return this.add(a);
    }
    arrayListHook.add.overload('int', 'java.lang.Object').implementation = function (a, b) {
        var retval = null;
        try{
            retval = Java.cast(b, Java.use("java.lang.String"));
            console.log("ArrayList.add:", a, retval);
        } catch (e){
        }
        return this.add(a, b);
    }

    var textUtils = Java.use("android.text.TextUtils");
    textUtils.isEmpty.implementation = function (a){
        console.log("textUtils.isEmpty:", a);
        return this.isEmpty(a);
    }

    var logUtilsHook = Java.use("android.util.Log");
    logUtilsHook.w.overload('java.lang.String', 'java.lang.String').implementation = function(tag, message){
        console.log("log.w:", tag, message);
        return this.w(tag, message);
    }

    var logUtilsHook = Java.use("android.util.Log");
    logUtilsHook.w.overload('java.lang.String', 'java.lang.String').implementation = function(tag, message){
        console.log("log.w:", tag, message);
        return this.w(tag, message);
    }

    var collections = Java.use("java.util.Collections");
    collections.sort.overload('java.util.List').implementation = function (a){
        try{
            showStacks();
            var result = Java.cast(a, Java.use("java.util.ArrayList"));
            console.log("Collections sort:", result.toString());
        }catch (e){
        }
        return this.sort(a);
    }

    var jsonObjectPutHook = Java.use("org.json.JSONObject");
    jsonObjectPutHook.put.overload('java.lang.String', 'java.lang.Object').implementation = function (a, b){
        //showStacks();
        console.log("JSONObject put:", a, b);
        return this.put(a, b);
    }
})
