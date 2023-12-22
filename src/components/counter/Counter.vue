<script lang="ts" setup>
import ButtonIcon from "../../ui-kit/buttons/ButtonIcon.vue";
import { useCartStore } from '../../stores/cartStore';
const cartStore = useCartStore();
const props = defineProps({
    productId: { type: String, required: true}
})
</script>

<template>
    <div class="counter">
        <ButtonIcon class="p-12 d-flex button--border" :icon="'/icons/plus.svg'" @click="cartStore.setProductCount(productId, 1)" />
        <input class="counter__input" :value="cartStore.getProductCount(productId) || 0"/>
        <ButtonIcon class="p-12 d-flex button--border" :icon="'/icons/minus.svg'" @click="cartStore.setProductCount(productId, -1)" />
    </div>
</template>

<style scoped>
.counter {
    display: flex;
    width: 100%;
}
.counter__input {
    display: inline-block;
    width: inherit;
    padding: 12px 14px;
    font-size: 18px;
    text-align: center;
    border-top: 1px solid #D1D1D3;
    border-bottom: 1px solid #D1D1D3;
}
.p-12 {
    padding: 12px;
}
</style>