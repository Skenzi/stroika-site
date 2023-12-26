<script lang="ts">
export default {
        props: {
            handler: { type: Function },
        }
    }
</script>

<template>
    <button @click="handler" class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
 .button {
    padding: 12px 24px;
 }
 .button--border {
    border: 1px solid var(--light-grey);
 }
</style>