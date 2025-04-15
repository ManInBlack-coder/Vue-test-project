<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>  
<div class="intro-container"> 

    <div class="intro">
        <h2>Introduction</h2>
        <p>This is the introduction section of the page.</p>
    </div>
</div>
   

</template>

<style scoped>


.intro-container {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;   
}
.intro {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    align-items: center;
    text-align: center;

}
</style>