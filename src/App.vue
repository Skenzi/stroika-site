<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './modules/header/Header.vue';
import Dropdown from './ui-kit/dropdown/Dropdown.vue';
import Footer from './modules/footer/Footer.vue';
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
