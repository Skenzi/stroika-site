<script lang="ts" setup>
import ButtonIcon from "../../ui-kit/buttons/ButtonIcon.vue";
import { useCartStore } from '../../stores/cartStore';
const cartStore = useCartStore();
const props = defineProps({
    productId: { type: String, required: true}
})
</script>

<template>
    <div class="d-flex w-full align-center">
        <ButtonIcon class="p-12 d-flex" :icon="'/icons/plus.svg'" @click="cartStore.setProductToCart(productId, 1)" />
        <div class="text-s-18">{{ cartStore.cart[productId] || 0 }}</div>
        <ButtonIcon class="p-12 d-flex" :icon="'/icons/minus.svg'" @click="cartStore.setProductToCart(productId, -1)" />
    </div>
</template>

<style scoped>
.p-12 {
    padding: 12px;
}
</style>