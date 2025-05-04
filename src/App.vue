<template>
  <Navbar />
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>


<script setup>
import Navbar from './components/ComponentNavbar.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Fade-in transition effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
