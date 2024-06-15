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
console.log(route.params, 1224532652, route.matched)
const headerText = route.params.category;
const items = products
</script>

<template>
    <main>
        <PageDescription :header="headerText" />
        <div class="d-flex gap-16 container">
            <ProductMenu />
            <div>
                <div class="group-controls">
                    <Button class="button--active">Популярные</Button>
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
.button {
    padding: 0;
    color: #8B8D92;
}
.button:nth-child(1n+2) {
    margin-left: 20px;
}
.button--active {
    color: #171B24;
}
</style>