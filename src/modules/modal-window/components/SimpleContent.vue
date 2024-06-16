<script lang="ts" setup>
import Button from '../../../ui-kit/buttons/Button.vue';
import { useModalStore } from '../../../stores/modal';
const modalStore = useModalStore();

</script>

<template>
        <div class="modal">
            <h2 class="modal__header">{{ modalStore.modalHeader }}</h2>
            <div>{{ modalStore.modalText }}</div>
            <Button :handler="modalStore.changeModalState">
                Понял
            </Button>
        </div>
</template>