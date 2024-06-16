<script lang="ts" setup>
import Button from '../../ui-kit/buttons/Button.vue';
import Counter from '../counter/Counter.vue';
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import type { ProductProps } from '@/types/index';
const props = defineProps<{
    item: ProductProps,
    link: object,
    isRow?: boolean,
}>()
const cartStore = useCartStore();
let discountPrice = 0;
if (props.item.discount) {
    discountPrice = +(props.item.price * ((100 - props.item.discount) / 100)).toFixed(2);
}
const cardClasses = {
    'product-card--row': props.isRow,
}
const priceClasses = {
    'body__price-old': discountPrice !== 0,
    "m-l-8": discountPrice !== 0,
}
</script>

<template>
    <article class="product-card" :class="cardClasses">
        <RouterLink :to="link" class="d-inline-block w-full">
            <img class="product-card__image" :src="'/src/assets/images/'+item.imagePath" />
        </RouterLink>
        <section class="product-card__body">
            <RouterLink :to="link" class="body__description d-inline-block">
                {{ item.title }}
            </RouterLink>
            <div class="body__price">
                <span v-if="discountPrice !== 0">{{ discountPrice }}</span>
                <span :class="priceClasses">{{ item.price }}</span>
            </div>
            <Button v-if="!cartStore.getProductCount(item.id)" class="bg-main" :handler="()=>cartStore.addProduct(item)">В корзину</Button>
            <Counter v-else :product-id="item.id" />
        </section>
        <div v-if="discountPrice !== 0" class="product-card__dicount">{{ '-' + item.discount + '%' }}</div>
    </article>
</template>

<style scoped>
.m-l-8 {
    margin-left: 8px;
}

.product-card {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    border: 1px solid #E8E9EA;
}

.product-card__dicount {
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 6px;
    border: 2px solid var(--main-color);
}

.product-card>* {
    flex: 1;
}

.product-card--row {
    flex-direction: row;
}

.product-card__image {
    width: 100%;
    height: 208px;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 1px solid #E8E9EA;
}

.product-card .product-card__image {
    border-bottom: 1px solid #E8E9EA;
}

.product-card--row .product-card__head {
    border-right: 1px solid #E8E9EA;
}

.product-card__body {
    height: 208px;
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.body__description {
    flex: 1;
}

.body__price {
    margin: 12px 0 16px 0;
    font-size: 20px;
}

.body__price-old {
    font-size: 16px;
    color: #8B8D92;
    text-decoration: line-through;
    text-decoration-color: #8B8D92;
}</style>