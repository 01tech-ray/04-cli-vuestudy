export default {
    bind:function(el,binding,vnode){
        function documentHandler(e){
            if(el.contains(e.target)){
                return false;
            }

            if(binding.expression){
                binding.value(e);
            }

            if(binding.arg){
                console.log(binding.arg);
            }
        }
        function keyupHandle(e){
            
        }
        el.__vueClickOutside__=documentHandler;
        document.addEventListener('click',documentHandler);
        el.addEventListener('keyup',keyupHandle);
    },
    unbind:function(el,binding){
        document.removeEventListener('click',el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
    updata:function(){

    }
}
