<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import ProductCard from '../components/card/ProductCard.vue';
import PageDescription from './components/page-description/PageDescription.vue';
import ProductMenu from '../components/product-menu/ProductMenu.vue';
import CardList from '../modules/card-list/CardList.vue';
import Button from '../ui-kit/buttons/Button.vue';
import buildPath from '../features/buildPath';
const paths = buildPath();
const items = [{
      "id": "001",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "002",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "003",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "004",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "005",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "006",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    },]
</script>

<template>
    <main>
        <PageDescription :header="'Сухие смеси'" />
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
                  <ProductCard v-for="item in items" :key="items.id" :item="item" />
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