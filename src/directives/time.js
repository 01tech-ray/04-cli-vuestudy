import Time from '../utilities/time';

export default {
    bind:function(el,binding){
        
        el.innerHTML=Time.getFormatTime(binding.value);
        el.__timeout__=setInterval(function(){
            el.innerHTML=Time.getFormatTime(binding.value);
        },600);
    },
    unbind:function(el){
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
}