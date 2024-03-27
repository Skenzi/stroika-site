<script lang="ts" setup>
import { RouterLink } from 'vue-router';
defineProps<{
    header: string,
    imagePath: string,
    link: string | object,
    position?: string
}>()
</script>

<template>
    <div class="category-card">
        <RouterLink custom v-slot="{navigate}" :to="link">
            <button role="link" @click="navigate">
                <div class="category-card__header">{{ header }}</div>
                <img :src="'/src/assets/images/'+imagePath" class="category-card__image" />
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.category-card {
    height: auto;
    background-color: #F6F6F6;;
}
.category-card__header {
    text-align: center;
    padding: 12px 12px 16px 12px;
    font-size: 18px;
    font-weight: 500;
    line-height: 136%;
}
.category-card__image {
    width: 100%;
}
</style>