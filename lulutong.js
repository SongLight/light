
Java.perform(function (){

    function showStacks(){
        console.log(Java.use('android.util.Log').getStackTraceString(
            Java.use('java.lang.Throwable').$new()
        ));
    }
    /*
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

        var selectHook = Java.use("com.lltskb.lltskb.adapters.ZwdListAdapter");
        selectHook.OooO0o0.implementation = function (a){
            console.log("view", a.toString());
            return this.OooO0o0(a);
        }*/

    // 调用系统常用函数，map
    var hashMapHook = Java.use('java.util.HashMap');
    hashMapHook.put.implementation = function (a, b){
        try{
            if(a.equals("StationMRI")){
                showStacks();
            }
        } catch (e){
        }
        console.log("hashMap.put:", a, b);
        return this.put(a, b);
    }

    // 调用系统常用函数，list
    var arrayListHook = Java.use('java.util.ArrayList');
    arrayListHook.add.overload('java.lang.Object').implementation = function (a){
        console.log("ArrayList.add:", a);
        return this.add(a);
    }

    var queryHook = Java.use('OooOoOO.o0O0O00');
    queryHook.OooOOO0.overload('java.lang.String', 'java.lang.String', 'java.util.List').implementation = function (a, b, c){
        try{
            var l = Java.cast(c, Java.use("java.util.ArrayList"));
            console.log("queryHook.query:", a, b, l.toString());
        } catch (e){
        }
        return this.OooOOO0(a, b, c);
    }
})
