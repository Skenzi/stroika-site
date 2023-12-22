<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import LinksPath from '../../../ui-kit/linksPath/LinksPath.vue';
import buildPath from '../../../features/getPathsFromUrl';
const paths = buildPath()
const props = defineProps({
    description: String,
    header: { type: String, required: true },
    pathEnd: String,
    backgroundImagePath: String
});
const classes = {
    'description-page--without-image': !props.backgroundImagePath,
}
</script>

<template>
    <section class="description-page" :class="classes"
        :style="`background-image: url(${backgroundImagePath})`">
        <LinksPath />
        <h1 class="description-page__header">{{ header }}</h1>
        <p>
            {{ description }}
        </p>
    </section>
</template>

<style scoped>
.description-page__header {
    margin-bottom: 20px;
}

.description-page {
    padding: 40px 740px 90px 100px;
    background-size: cover;
    background-repeat: no-repeat;
}

.description-page--without-image {
    margin: 40px 140px 0 140px;
}

.description-page--without-image .description-page__header {
    margin: 0;
}

.description-page__path {
    margin-bottom: 20px;
}</style>