
        <style>
            .main{
                width:125px;
            }
            button{
                display:block;
                width:100%;
                color:#fff;
                background-color:#39f;
                border:0;
                padding:6px;
                text-align:center;
                font-size:12px;
                border-radius:4px;
                cursor:pointer;
                outline:none;
                position:relative;
            }
            button:active{
                top:1px;
                left:1px;
            }
            .dropdown{
                width:100%;
                height:150px;
                margin:5px 0;
                font-size:12px;
                background-color:#fff;
                border-radius:4px;
                box-shadow:0 1px 6px rgba(0,0,0,0.2);
            }
            .dropdown p {
                display:inline-block;
                padding:6px;
            }
        </style>

<template>
    <div >
        <div class="test">
            <div class="dir" v-test:msg.a.b="message"></div>
        </div>

        <div class="main" v-clickoutside.esc="handleClose">
            <button @click="show= !show">点击显示下拉菜单</button>
            <div class="dropdown" v-show="show">
                <p>下拉框的内容，点击外面区域可以关闭</p>
            </div>
        </div>
        <div>
            {{message}}
        </div>
    </div>
</template>

<script>
import test from '../directives/test.js';
import clickoutside from '../directives/clickoutside.js';
export default {
    directives:{
        test:test,
        clickoutside:clickoutside
    },
    data:() =>{
        return {
            message:'test',
            show:false
        }
    },
    methods:{
        handleClose:function(){
            this.show = false
        }
    }
}
</script>
