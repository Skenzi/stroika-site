<script lang="ts" setup>
defineProps({
    innerText: String
})
</script>

<template>
    <label class="checkbox">
        <input class="checkbox__input" type="checkbox" id="name" name="name" />
        <span class="checkbox__text" for="name">{{ innerText }}</span>
    </label>
</template>

<style scoped>
.checkbox {
    display: flex;
    gap: 8px;
    cursor: pointer;
}
.checkbox::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(/src/assets/icons/checkbox.svg);
}
.checkbox__input {
    display: none;
}
.checkbox:has(.checkbox__input:checked).checkbox::before {
    background: url(/src/assets/icons/checked.svg);
}
.checkbox__text {
    
}
</style>