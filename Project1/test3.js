
Java.perform(()=>{

    function showStacks(){
        console.log(Java.use(('android.util.Log')).getStackTraceString(
            Java.use('java.lang.Throwable').$new()
        ));
    }

    /*var toastHook = Java.use('android.widget.Toast');
    toastHook.show.implementation = function (){
        showStacks();
        console.log("toast show:")
        this.show();
    }

    var base64Hook = Java.use('android.util.Base64');
    base64Hook.encodeToString.overload('[B', 'int').implementation = function (a, b){
        showStacks();
        console.log("Base64 encodeToString input params:", JSON.stringify(a), b);
        var result = this.encodeToString(a, b);
        console.log("Base64 encodeToString result:", result);
        return result;
    }

    var strHook = Java.use('java.lang.String');
    strHook.getBytes.overload().implementation = function (){
        showStacks();
        var bytes = this.getBytes();
        var string = Java.use('java.lang.String').$new(bytes);
        console.log("String self:", string);
        return bytes;
    }

    // Hook String创建函数
    var strFactoryHook = Java.use('java.lang.StringFactory');
    strFactoryHook.newStringFromString.implementation = function (a){
        var retval = this.newStringFromString(a);
        console.log("StringFactory newStringFromString:", a);
        return retval;
    }
    strFactoryHook.newStringFromChars.overload('[C').implementation = function (a){
        var retval = this.newStringFromChars(a);
        console.log("StringFactory newStringFromChars:", a);
        return retval;
    }*/

    // Hook StringBuilder、StringBuffer
    /*var stringBuilderHook = Java.use('java.lang.StringBuilder');
    stringBuilderHook.toString.implementation = function (a){
        var retval = this.toString();
        if(retval.indexOf("Encrypt") != -1){
            showStacks();
        }
        console.log("StringBuilder toString:", retval);
        return retval;
    }
    var StringBufferHook = Java.use('java.lang.StringBuffer');
    StringBufferHook.toString.implementation = function (a){
        var retval = this.toString();
        if(retval.indexOf("username") != -1){
            showStacks();
        }
        console.log("StringBuffer toString:", retval);
        return retval;
    }*/

    // 查看所有加载的类
    // var loadClass = Java.enumerateLoadedClassesSync();
    // loadClass.forEach((item,index,arr) => {
    //     console.log(item);
    // })

    // hook setonClickListener

    var btnLoginValue = Java.use("android.support.v7.app.AppCompatActivity");
})