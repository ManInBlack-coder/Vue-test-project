<script setup>
// Importime Home komponendi õigest asukohast
import Home from '@/components/pages/Home/Home.vue'
// Komponendid on <script setup> sisse automaatselt registreeritud
</script>

<template>
  <div class="app-container">
    <Home />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  color: #fefefe;
  margin-bottom: 20px;
}
</style>
