<script lang="ts" setup>
import ButtonIcon from "../../ui-kit/buttons/ButtonIcon.vue";
import { useCartStore } from '../../stores/cartStore';
const cartStore = useCartStore();
const props = defineProps({
    productId: { type: String, required: true}
})
const productCount = cartStore.getProductCount(props.productId);
</script>

<template>
    <div class="checkbox">
        <ButtonIcon @click="cartStore.setProductToCart(productId, 1)" />
        <div>{{ productCount }}</div>
        <ButtonIcon @click="cartStore.setProductToCart(productId, -1)" />
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