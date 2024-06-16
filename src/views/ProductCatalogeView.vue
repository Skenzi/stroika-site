<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import ProductCard from '../components/card/ProductCard.vue';
import PageDescription from './components/page-description/PageDescription.vue';
import ProductMenu from '../components/product-menu/ProductMenu.vue';
import CardList from '../modules/card-list/CardList.vue';
import Button from '../ui-kit/buttons/Button.vue';
const { products } = useProductStore();
const route = useRoute()
const headerText = route.params.category as string;
</script>

<template>
    <main>
        <PageDescription :header="headerText" />
        <div class="d-flex gap-16 container">
            <ProductMenu />
            <div>
                <div class="group-controls">
                    <Button :handler="()=>{}" class="button--active">Популярные</Button>
                    <Button :handler="()=>{}">Популярные</Button>
                    <Button :handler="()=>{}">Популярные</Button>
                    <Button :handler="()=>{}">Популярные</Button>
                </div>
                <CardList class="m-t-16" :column="3" :card-type="'product'" :items="products">
                  <ProductCard v-for="item in products" :link="{ name: 'product', params: { category: item.category, subcategory: item.subcategory, product: item.description}}" :key="item.id" :item="item" />
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