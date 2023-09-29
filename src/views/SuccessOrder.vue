<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Button from '../ui-kit/buttons/Button.vue';
</script>

<template>
  <main>
    <section class="border-wrapper margin-center-x w-md m-80-0 text-center p-36-98 ">
        <div class="success-icon margin-center-x"></div>
        <h1>Спасибо!</h1>
        <p class="m-t-8">Ваша заявка принята. Мы свяжемся с вами в ближайшее время</p>
        <Button class="bg-main m-t-24">
            <RouterLink :to="'/'">Перейти на главную</RouterLink>
        </Button>
    </section>
  </main>
</template>

<style scoped>
.success-icon {
    width: 80px;
    height: 80px;
    background: url(/icons/check-circle.svg);
}
.p-36-98 {
    padding: 36px 98px;
}
</style>