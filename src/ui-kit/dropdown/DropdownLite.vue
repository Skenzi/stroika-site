<script lang="ts" setup>
import { ref, computed } from 'vue'
        defineProps({
            buttonText: String
        })
        let isOpen = ref(false);
        const menuClasses = computed(() => ({
            'dropdown__menu--open': isOpen.value
        }))
        const buttonClasses = computed(() => ({
            'dropdown__button--clicked': isOpen.value
        }))
        const handler = () => {
            isOpen.value = !isOpen.value;
        }
</script>

<template>
    <div class="dropdown">
        <button class="dropdown__button" :class="buttonClasses" @click="handler">{{ buttonText }}</button>
        <div class="dropdown__menu" :class="menuClasses">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.dropdown {
    position: relative;
}
    .dropdown__button {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 16px 20px;
        text-align: left;
        background-color: #F6F6F6;
    }
    .dropdown__button::after {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url('/src/assets/icons/chevronR.svg') no-repeat;
        transform: rotate(90deg);
    }
    .dropdown__button--clicked.dropdown__button::after {
        transform: rotate(270deg);
    }
    .dropdown__menu {
        display: none;
        padding: 0 61px 16px 20px;
        background-color: #F6F6F6;
    }
    .dropdown__menu--open {
        display: block;
    }
</style>