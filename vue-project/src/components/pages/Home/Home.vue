<script setup>
// Kasutame suhtelist teekonda komponentide importimiseks
import Navbar from './home.components/navbar.vue'
import Intro from './home.components/intro.vue'
import Footer from './home.components/footer.vue'
</script>

<template>
    <div class="home-container">
        <div class="navbar-section">
            <Navbar />
        </div>
        <div class="content-wrapper">
            <Intro />
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.navbar-section {
    width: 100%;
}

.content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>