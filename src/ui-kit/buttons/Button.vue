<script lang="ts">
    export default {
        props: {
            text: String,
            handler: { type: Function }
        }
    }
</script>

<template>
    <button class="button" v-on:click="handler">
        {{text}}
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