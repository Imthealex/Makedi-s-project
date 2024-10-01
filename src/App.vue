<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'

</script>

<template>
  <v-app>
    <main>
      <RouterView></RouterView>
    </main>
    <Footer/>
  </v-app>
</template>
