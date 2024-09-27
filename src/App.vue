<script setup>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <main>
    <authenticator>
    <Header />
    <div class="marginHeader"></div>
    <router-view />
    <div class="marginFooter"></div>
    <Footer />
  </authenticator>
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
