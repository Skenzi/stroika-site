<script lang="ts" setup>

defineProps({
    imagePath: { type: String, required: true },
    header: { type: String, required: true}
})
const headerText = 'Category'
</script>

<template>
    <div class="category-card">
        <div class="category-card__header">{{ header || headerText }}</div>
        <img :src="imagePath" class="category-card__image" />
    </div>
</template>

<style scoped>
.category-card {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 278px;
    border: none;
    background-color: #F6F6F6;;
}
.category-card__header {
    text-align: center;
}
.category-card__image {
    width: 100%;
}
</style>