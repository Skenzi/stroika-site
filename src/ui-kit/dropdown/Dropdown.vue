<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
    setup() {
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
        return {
            isOpen,
            buttonClasses,
            menuClasses,
            handler
        }
    },
})
</script>

<template>
    <div class="dropdown">
        <input readonly @click="handler" class="input" />
        <button class="dropdown__button" :class="buttonClasses" @click="handler"></button>
        <div class="dropdown__menu" :class="menuClasses">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.dropdown {
    position: relative;
    width: 100%;
}
    .dropdown__button {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 24px;
        height: 24px;
        display: inline-block;
        background: url('/icons/angle.png');
        transform: rotate(90deg);
    }
    .dropdown__button--clicked {
        transform: rotate(270deg);
    }
    .dropdown__menu {
        display: none;
        width: 100%;
    }
    .dropdown__menu--open {
        display: block;
    }
</style>