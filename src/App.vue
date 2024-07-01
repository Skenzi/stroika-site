<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './modules/header/TheHeader.vue';
import Footer from './modules/footer/TheFooter.vue';
import ModalWindow from './modules/modal-window/ModalWindow.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <ModalWindow />
</template>

<style>
</style>
