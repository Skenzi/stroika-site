<script setup lang="ts">
defineProps<{
    handler: ((payload: MouseEvent) => void) | ((payload: Event) => void) | undefined,
    icon: string
}>()
</script>

<template>
    <button class="button" @click="handler">
        <img :src=icon alt="button-icon" />
    </button>
</template>

<style scoped>
 .button {
    padding: 14px;
 }
 .button__icon {
    height: 100%;
 }
 .button--border {
    border: 1px solid var(--light-grey);
 }
</style>