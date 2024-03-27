<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from 'vue';
    const props = defineProps({
      text: String,
      handler: { type: Function },
      side: String,
      icon: String
    })
    const icon = defineAsyncComponent(() => import(`../../assets/icons/${props.icon}.svg`))
    const classess = {
      'button__icon-after': props.side === 'after',
      'button__icon-before': props.side === 'before',
    };
</script>

<template>
    <button class="button" v-on:click="handler">
         <component :is="icon" :class="classess" />
        <slot></slot>
    </button>
</template>

<style>
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
 .button-icon {
   padding: 14px;
}
 .button__icon-before {
    order: 0;
 }
 .button__icon-after {
    order: 10;
 }
 .button--border {
    border: 1px solid var(--light-grey);
 }
 .button:hover {
    color: white;
    background-color: var(--grey);
 }
 .button:hover path {
   stroke: white;
 }
</style>