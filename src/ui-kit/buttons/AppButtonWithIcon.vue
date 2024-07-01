<script lang="ts" setup>
import { defineAsyncComponent, toRef } from 'vue';
const props = defineProps<{
    handler: ((payload: MouseEvent) => void) | ((payload: Event) => void) | undefined,
    side?: string,
    icon: string
}>()
    const icon = defineAsyncComponent(() => import(`../../assets/icons/${props.icon}.svg`))
    const refSide = toRef(props, 'side')
    const classess = {
      'button__icon-after': refSide.value === 'after',
      'button__icon-before': refSide.value === 'before',
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