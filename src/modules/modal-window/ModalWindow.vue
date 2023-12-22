<script lang="ts" setup>
import Button from '../../ui-kit/buttons/Button.vue';
import LoginContent from './components/LoginContent.vue';
import RegistrationContent from './components/RegistrationContent.vue';
import CitySearchContent from './components/CitySearchContent.vue';
import SimpleContent from './components/SimpleContent.vue';
import { useModalStore } from '../../stores/modal';
const modalStore = useModalStore();
</script>

<template>
    <div :key="modalStore.modalType" class="modal-wrapper" v-if="modalStore.isOpen">
        <LoginContent v-if="modalStore.modalType === 'login'" />
        <CitySearchContent v-else-if="modalStore.modalType === 'cities'" />
        <RegistrationContent v-else-if="modalStore.modalType === 'registration'" />
        <SimpleContent v-else />
        <button @click="modalStore.changeModalState" class="close-modal"></button>
    </div>
</template>

<style>
body:has(.modal) {
    overflow: hidden;
}
.modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(23, 27, 36, 0.60);
    z-index: 999999;
}
.close-modal {
    position: absolute;
    width: 52px;
    height: 52px;
    right: 20px;
    top: 20px;
    background: url(/icons/cross.svg);
}
.modal {
    padding: 36px;
    background-color: var(--white);
}
.modal__header {
    text-align: center;
}
</style>