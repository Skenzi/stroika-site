<script lang="ts" setup>
import ProductCard from '../../components/card/ProductCard.vue';
import BrandCard from '../../components/card/BrandCard.vue';
import CategoryCard from '../../components/card/CategoryCard.vue';
const props = defineProps({
    items: { type: Object, required: true},
    cardType: { type: String, required: true },
    column: Number,
    position: String,
})
const cardMapping = {
    'product': ProductCard,
    'brand': BrandCard,
    'category': CategoryCard
}
const card = cardMapping[props.cardType];
const columnClass = `col-${props.column}`
</script>

<template>
    <div class="card-list">
        <card :class="columnClass" v-for="item in items" :position="position" :header="item.header" :key="item.id" :price="item.price" :imagePath="item.imagePath" :description="item.description" :discount="item.discount">
        </card>
    </div>
</template>

<style scoped>
    .card-list {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }
    .card-list .col-1 {
        flex-basis: calc(100% - 16px);
    }
    .card-list .col-2 {
        flex-basis: calc(50% - 16px);
    }
    .card-list .col-3 {
        flex-basis: calc(33.3333% - 16px);
    }
    .card-list .col-4 {
        flex-basis: calc(25% - 16px);
    }
    .card-list .col-5 {
        flex-basis: calc(20% - 16px);
    }
    .card-list .col-6 {
        flex-basis: calc(16.6666% - 16px);
    }
</style>