<script lang="ts" setup>
const props = defineProps({
    column: Number,
})
const columnClass = `col-${props.column || 1}`;
</script>

<template>
    <div class="card-list" :class="columnClass">
        <slot></slot>
    </div>
</template>

<style>
    .card-list {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }
    .card-list.col-1 > * {
        flex-basis: calc(100% - 15px);
    }
    .card-list.col-2 > * {
        flex-basis: calc(50% - 15px);
    }
    .card-list.col-3 > * {
        flex-basis: calc(33.3333% - 15px);
    }
    .card-list.col-4 > * {
        flex-basis: calc(25% - 15px);
    }
    .card-list.col-5 > * {
        flex-basis: calc(20% - 15px);
    }
    .card-list.col-6 > * {
        flex-basis: calc(16.6666% - 15px);
    }
</style>