<script lang="ts" setup>

const props = defineProps({
    size: String
})
const classes = {
    'container--big': props.size === 'big',
}
</script>

<template>
    <section class="container" :class="classes">
        <slot></slot>
    </section>
</template>