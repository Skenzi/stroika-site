<script lang="ts" setup>
import AboutCompany from './components/about-company/AboutCompany.vue'
import ContentBlock from './components/content-block/ContentBlock.vue'
import PageDescription from './components/page-description/PageDescription.vue'
</script>

<template>
  <main>
    <PageDescription class="main-top" :header="'Контакты'" :pathEnd="'Контакты'" />
    <div class="map"></div>
    <ContentBlock>
      <h2>ООО «СтройкаСтор»</h2>
      <div class="d-flex m-t-20 gap-16">
        <p class="flex-2">
        115114, г. Москва, Дербеневская набережная, д. 7, стр. 8 
        <span class="d-inline-block w-full m-t-20">Павелецкая</span>
        <span class="d-inline-block w-full">Автобусы 13, 106, 158, 184, 632</span>
        <span class="d-inline-block w-full">Остановка «Дербеневская наб., д. 7»</span>
      </p>
      <p class="flex-3">
        <span class="d-inline-block w-full">ОГРН: 1047796688554</span> <span class="d-inline-block w-full">ИНН 7703528301</span> <span class="d-inline-block w-full">КПП 774850001</span> <span class="d-inline-block w-full">ОКТМО 45380000</span> <span class="d-inline-block w-full">ОГРН 1047796688554</span> <span class="d-inline-block w-full">Расчетный
        рублевый счет: 40702810900001403352</span> <span class="d-inline-block w-full">Банк: АО «Сбербанк» г. Москва</span> <span class="d-inline-block w-full">Корреспондентский счет:
        30101810200000000700</span> <span class="d-inline-block w-full">БИК: 044525700</span>
      </p>
      <p class="flex-1">Поддержка клиентов <span class="d-inline-block w-full">info@stroykastore.ru</span></p>
      </div>
    </ContentBlock>
    <AboutCompany />
  </main>
</template>

<style scoped>
p {
    font-family: Inter;
    font-size: 18px;
}
.gap-16 {
    gap: 16px;
}
.map {
  height: 390px;
  margin: 0 140px;
  background: url(/images/map.png) no-repeat;
  background-size: cover;
}
.m-t-20 {
  margin-top: 20px;
}
.step-container {
  max-width: 278px;
  font-weight: 500;
}
</style>