<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Button from '../ui-kit/buttons/Button.vue';
</script>

<template>
  <main>
    <section class="border-wrapper margin-center-x w-md m-80-0 text-center">
        <h1>404</h1>
        <h2 class="m-t-8">Страница не найдена</h2>
        <p class="m-t-8">Неправильно набран адрес или такая страница больше не существует</p>
        <Button :handler="()=>{}" class="bg-main m-t-24">
            <RouterLink :to="'/'">Перейти на главную</RouterLink>
        </Button>
    </section>
  </main>
</template>