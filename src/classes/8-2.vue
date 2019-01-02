<template>
    <div>
        <div v-time="timeNow"></div>
        <div v-time="timeBefore"></div>
    </div>
</template>

<script>
import time from '../directives/time.js';
export default {
    directives:{
        time:time
    },
    data:()=>{
        return{
            timeNow: (new Date()).getTime(),
            timeBefore:1488930695721
        }
    }
}
</script>
