<script lang="ts">
    export default {
        props: {
            handler: { type: Function },
            icon: String
        }
    }
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
 .button--border {
    border: 1px solid var(--light-grey);
 }
</style>