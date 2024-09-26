<script setup>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <div class="marginHeader"></div>
    <router-view />
    <div class="marginFooter"></div>
    <Footer />
  </main>
</template>

<style>
.marginHeader {
  height: 60px;
  background-color: white;
}

.marginFooter {
  height: 50px;
  background-color: white;
}
</style>
