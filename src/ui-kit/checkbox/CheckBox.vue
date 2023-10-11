<script lang="ts" setup>

</script>

<template>
    <div class="checkbox">
        <input class="checkbox__input" type="checkbox" id="name" name="name" />
        <label class="checkbox__text" for="name">Name</label>
    </div>
</template>

<style scoped>
.checkbox {
    display: flex;
    gap: 8px;
}
.checkbox::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(/icons/checkbox.svg);
}
.checkbox__input {
    display: none;
}
.checkbox:has(.checkbox__input:checked).checkbox::before {
    background: url(/icons/checked.svg);
}
.checkbox__text {
    
}
</style>