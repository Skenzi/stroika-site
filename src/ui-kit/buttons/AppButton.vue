<script setup lang="ts">
defineProps<{
    handler: ((payload: MouseEvent) => void) | ((payload: Event) => void) | undefined,
}>()
</script>

<template>
    <button @click="handler" class="button">
        <slot></slot>
    </button>
</template>

<style>
 .button {
    padding: 12px 24px;
 }
 .button--border {
    border: 1px solid var(--light-grey);
 }
 .button.bg-main:hover {
    color: white;
    background-color: var(--grey);
 }
</style>