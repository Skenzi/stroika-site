<script lang="ts" setup>

</script>

<template>
    <form>
        <slot></slot>
    </form>
</template>

<style>
.form-label {
    margin-bottom: 8px;
    flex-basis: 100%;
}
.form-group {
    display: flex;
    flex-wrap: wrap;

    flex: 1;
}
.form-row {
    display: flex;
    margin-top: 24px;
    gap: 16px;
}
.form-element {
    flex-basis: 100%;
}
</style>