<script setup lang="ts">
import ContentBlock from './components/content-block/ContentBlock.vue';
import PageDescription from './components/page-description/PageDescription.vue';
import CatalogNavigationList from '../modules/navigation-list/CatalogNavigationList.vue'

const items = [
    {
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
    },
    {
      "id": "007",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "008",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "009",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "010",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "011",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "012",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    }
  ]
</script>

<template>
  <main>
    <PageDescription class="main-top" :header="'Каталог'" :backgroundImagePath="'/images/backgroundBrands.png'" />
    <ContentBlock>
      <CatalogNavigationList />
    </ContentBlock>
  </main>
</template>
