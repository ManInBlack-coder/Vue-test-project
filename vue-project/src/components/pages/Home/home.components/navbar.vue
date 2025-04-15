<script setup>
// component_one.vue - lihtne Vue komponent
</script>

<template>
  <div class="navbar">
    <h2>Test_VUE</h2>
    <ul class="navbar-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 40px;
  margin-bottom: 10px;
  height: 50%;
}
.navbar-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-right: 20px;
}

</style>  


