<script lang="ts" setup>
import PageDescription from './components/page-description/PageDescription.vue'
import FaqView from '../modules/faq/FaqView.vue'
</script>

<template>
  <main>
    <PageDescription
      :header="'Доставка'"
      :backgroundImagePath="'/src/assets/images/backgroundBrands.png'"
      :pathEnd="'Доставка'"
      :description="'Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика'"
    />
    <div>
      <h2>Как сделать заказ: 4 простых шага</h2>
      <div class="d-flex justify-between m-t-32 gap-16">
        <div class="step-container">
          <img :src="'/icons/stepD1.svg'" alt="step 1" />
          <p>Добавьте нужные товары в корзину и оплатите заказ</p>
        </div>
        <div class="step-container">
          <img :src="'/icons/stepD2.svg'" alt="step 2" />
          <p>Получите уведомления о подтверждении вашего заказа</p>
        </div>
        <div class="step-container">
          <img :src="'/icons/stepD3.svg'" alt="step 3" />
          <p>После подтверждения мы сформируем ваш заказ</p>
        </div>
        <div class="step-container">
          <img :src="'/icons/stepD4.svg'" alt="step 4" />
          <p>Заберите из пунктов выдачи</p>
        </div>
      </div>
    </div>
    <FaqView />
  </main>
</template>

<style scoped>
.m-t-32 {
    margin-top: 32px;
}
.step-container {
    max-width: 278px;
    font-weight: 500;
}
</style>