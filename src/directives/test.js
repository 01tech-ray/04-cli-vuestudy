
export default
{
    bind:function(el,binding,vnode){
        var keys=[];
        for (var i in vnode){
            keys.push(i);
        }

        el.innerHTML=
        'name:'+binding.name+'<br>'+
        'value:'+binding.value+'<br>'+
        'expression:'+binding.expression+'<br>'+
        'argument:'+binding.arg+'<br>'+
        'modifiers:'+binding.modifiers+'<br>'+
        'vnode keys:'+keys.join(',')
    }
}