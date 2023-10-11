<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import buildPath from '../../../features/buildPath';
const paths = buildPath()
const props = defineProps({
    description: String,
    header: { type: String , required: true },
    pathEnd: String,
    backgroundImagePath: String
});
const classes = {
    'description-page--without-image': !props.backgroundImagePath,
}
</script>

<template>
    <section class="description-page m-40-40-0-40" :class="classes" :style="`background-image: url(${backgroundImagePath})`">
        <div class="description-page__path">
            <RouterLink v-for="path in paths" :key="path" :to="path">{{ path }} -></RouterLink>
        </div>
        <h1>{{ header }}</h1>
        <p>
            {{ description }}
        </p>
    </section>
</template>

<style scoped>
h1 {
    margin-bottom: 20px;
}
    .description-page {
        padding: 40px 740px 90px 100px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .description-page--without-image {
        margin: 0;
        padding: 40px 140px 0 140px;
}
    .description-page__path {
        margin-bottom: 20px;
    }
</style>