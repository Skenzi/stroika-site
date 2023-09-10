<script lang="ts" setup>
import ContentBlock from './components/content-block/ContentBlock.vue'
import PageDescription from './components/page-description/PageDescription.vue'
</script>

<template>
  <main>
    <PageDescription
      class="main-top"
      :header="'Документация'"
      :pathEnd="'Документация'"
    />
    
  </main>
</template>

<style scoped>
p:nth-child(1n+2) {
    margin-top: 20px;
}
.m-t-32 {
    margin-top: 32px;
}
.step-container {
    max-width: 278px;
    font-weight: 500;
}
</style>