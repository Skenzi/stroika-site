<script lang="ts" setup>
import PageDescription from './components/page-description/PageDescription.vue'
import DocumentCard from '../components/card/DocumentCard.vue'
</script>

<template>
  <main>
    <PageDescription
      :header="'Документация'"
      :pathEnd="'Документация'"
    />
    <div class="container container--all d-flex gap-16">
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
    </div>
  </main>
</template>

<style scoped>
.container {
  padding-top: 40px;
}
.gap-16 {
    gap: 16px;
}
</style>