<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import ProductCard from '../components/card/ProductCard.vue';
import PageDescription from './components/page-description/PageDescription.vue';
import ProductMenu from '../components/product-menu/ProductMenu.vue';
import CardList from '../modules/card-list/CardList.vue';
import Button from '../ui-kit/buttons/Button.vue';
const { categories, products } = useProductStore();
const route = useRoute()
const headerText = route.params.category;
const items = products
</script>

<template>
    <main>
        <PageDescription :header="headerText" />
        <div class="d-flex gap-16 p-0-140-80-140">
            <ProductMenu />
            <div>
                <div class="sort-buttons">
                    <Button class="sort-buttons__active-button">Популярные</Button>
                    <Button>Популярные</Button>
                    <Button>Популярные</Button>
                    <Button>Популярные</Button>
                </div>
                <CardList class="m-t-16" :column="3" :card-type="'product'" :items="items">
                  <ProductCard v-for="item in items" :link="{ name: 'product', params: { category: item.category, subcategory: item.subcategory, product: item.description}}" :key="items.id" :item="item" />
                </CardList>
            </div>
        </div>
    </main>
</template>

<style scoped>
.p-0-140-80-140 {
    padding: 0 140px 80px 140px;
}
.m-t-16 {
    margin-top: 16px;
}
.button {
    padding: 0;
    color: #8B8D92;
}
.button:nth-child(1n+2) {
    margin-left: 20px;
}
.sort-buttons__active-button {
    color: #171B24;
}
</style>