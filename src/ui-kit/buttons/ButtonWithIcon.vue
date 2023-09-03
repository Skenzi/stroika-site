<script lang="ts">
    export default {
        props: {
            text: String,
            handler: { type: Function, required: true },
            side: String,
            icon: String
        },
    }
</script>

<template>
    <button class="button" v-on:click="handler">
        <img :class="[side === 'after' ? 'button__icon--after' : 'button__icon--before']" :src=icon alt="button-icon" />
        <span>{{text}}</span>
    </button>
</template>

<style scoped>
 .button {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
 }
 .button.flex-col {
    padding: 0;
    gap: 0;
 }
 .button__icon--before {
    order: 0;
 }
 .button__icon--after {
    order: 10;
 }
 .button--border {
    border: 1px solid var(--light-grey);
 }
</style>