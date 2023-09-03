<script lang="ts" setup>
import Button from '../../ui-kit/buttons/Button.vue';

const props = defineProps({
    price: { type: Number, required: true},
    description: { type: String, required: true},
    imagePath: { type: String, required: true },
    discount: Number,
    position: String,
})
let discountPrice = 0;
if(props.discount) {
    discountPrice = (props.price * ((100 - props.discount) / 100)).toFixed(2);
}
const cardClasses = {
    'product-card--row': props.position === 'row',
}
const priceClasses = {
    'body__price-old': discountPrice !== 0,
    "m-l-8": discountPrice !== 0,
}
</script>

<template>
    <div class="product-card" :class="cardClasses">
        <div class="product-card__head"><img class="product-card__image" :src="imagePath" /></div>
        <div class="product-card__body">
            <div class="body__description">{{ description }}</div>
            <div class="body__price">
                <span v-if="discountPrice !== 0">{{ discountPrice }}</span>
                <span :class="priceClasses">{{ price }}</span>
            </div>
            <Button class="body__button" :text="'В корзину'" />
        </div>
        <div class="product-card__dicount">{{ '-' + discount + '%' }}</div>
    </div>
</template>

<style scoped>
.m-l-8 {
    margin-left: 8px;
}
.product-card {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 278px;
    border: 1px solid  #E8E9EA;
}
.product-card__dicount {
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 6px;
    border: 2px solid var(--main-color);
}
.product-card > * {
    flex: 1;
}
.product-card--row {
    flex-direction: row;
}
.product-card .product-card__head {
        border-bottom: 1px solid  #E8E9EA;
    }
    .product-card--row .product-card__head {
        border-right: 1px solid  #E8E9EA;
    }
    .product-card__image {
        width: 100%;
        height: 100%;
    }
    .product-card__body {
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
    .body__button {
        width: 100%;
        background-color: var(--main-color);
    }
    .body__price-old {
        font-size: 16px;
        color: #8B8D92;
        text-decoration:line-through;
        text-decoration-color: #8B8D92;
    }
</style>