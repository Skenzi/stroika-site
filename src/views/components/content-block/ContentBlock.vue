<script lang="ts" setup>

const props = defineProps({
    size: String
})
const classes = {
    'content-block--big': props.size === 'big',
}
</script>

<template>
    <section class="content-block" :class="classes">
        <slot></slot>
    </section>
</template>

<style scoped>
    .content-block {
        padding: 80px 140px;
    }
    .content-block--big {
        padding: 40px;
    }
</style>