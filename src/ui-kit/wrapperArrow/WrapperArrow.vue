<script lang="ts" setup>

</script>

<template>
    <div class="wrapper-arrow">
        <slot></slot>
    </div>
</template>

<style scoped>
.wrapper-arrow {
    display: inline-block;
}
.wrapper-arrow:hover::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background: url('/src/assets/icons/arrowR.svg');
    background-size: contain;
}
</style>>