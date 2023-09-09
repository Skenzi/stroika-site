<script lang="ts" setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
    description: String,
    header: { type: String , required: true },
    pathEnd: String,
    backgroundImagePath: String
});
</script>

<template>
    <section class="description-page m-40-40-0-40" :style="`background-image: url(${backgroundImagePath})`">
        <div class="description-page__path">
            <RouterLink :to="'/'">Главная</RouterLink>
            →
            {{ pathEnd }}
        </div>
        <h1>{{ header }}</h1>
        <p>
            {{ description }}
        </p>
    </section>
</template>

<style scoped>
    .description-page {
        padding: 40px 740px 90px 100px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .description-page__path {
        margin-bottom: 20px;
    }
</style>