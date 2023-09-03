<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './modules/header/Header.vue';
import Dropdown from './ui-kit/dropdown/Dropdown.vue';
import Footer from './modules/footer/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
</style>
