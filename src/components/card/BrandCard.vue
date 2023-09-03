<script lang="ts" setup>

defineProps({
    imagePath: { type: String, required: true },
})
</script>

<template>
    <div class="brand-card">
        <img :src="imagePath" alt="brand"/>
    </div>
</template>

<style scoped>
.brand-card {
    flex: 1;
    border: 1px solid  #E8E9EA;
}
.brand-card img {
    width: 100%;
}
</style>