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
            handler,
        }
    },
    props: {
        inputState: {type: String}
    }
})
</script>

<template>
    <div class="dropdown">
        <input readonly :value="inputState" @click="handler" class="input" />
        <button class="dropdown__button" :class="buttonClasses" @click="handler"></button>
        <ul class="dropdown__menu" :class="menuClasses">
            <slot></slot>
        </ul>
    </div>
</template>

<style>
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
        background: url('/src/assets/icons/chevronR.svg');
        transform: rotate(90deg);
    }
    .dropdown__button--clicked {
        transform: rotate(270deg);
    }
    .dropdown__menu {
        display: none;
        width: 100%;
    }
    .dropdown__menu * {
        width: 100%;
    }
    .dropdown__menu .button {
        padding: 0;
        margin-top: 6px;
        justify-content: left;
    }
    .dropdown__menu--open {
        display: block;
    }
</style>