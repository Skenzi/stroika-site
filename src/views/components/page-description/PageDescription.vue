<script lang="ts" setup>
import LinksPath from '@/components/links-path/LinksPath.vue';
const props = defineProps<{
    description?: string,
    header: string,
    backgroundImagePath?: string
}>();
const classes = {
    'description-page--without-image': !props.backgroundImagePath,
}
</script>

<template>
    <section class="description-page" :class="classes"
        :style="`background-image: url(${backgroundImagePath})`">
        <LinksPath />
        <h1 class="description-page__header">{{ header }}</h1>
        <p v-if="description">
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
    margin: 40px 140px 40px 140px;
}

.description-page--without-image .description-page__header {
    margin: 0;
}

.description-page__path {
    margin-bottom: 20px;
}
@media (max-width: 769px) {
    .description-page {
        padding: 10px 185px 22px 35px;
    }
    .description-page--without-image {
        margin: 10px 35px;
    }
  }
  @media (max-width: 400px) {
    .description-page {
        padding: 5px;
    }
    .description-page--without-image {
        margin: 10px;
    }
  }
</style>