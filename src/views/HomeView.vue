<script setup lang="ts">
import Slider from '../components/slider/Slider.vue';
import Carousel from '../modules/carousel/Carousel.vue';
import ButtonWithIcon from '../ui-kit/buttons/ButtonWithIcon.vue';
import CardList from '../modules/card-list/CardList.vue';
import ProductCard from '../components/card/ProductCard.vue';
import CategoryCard from '../components/card/CategoryCard.vue';
import BrandCard from '../components/card/BrandCard.vue';
import AboutCompany from './components/about-company/AboutCompany.vue';
import { useProductStore } from '../stores/productStore';
import { useCommentsStore } from '../stores/commentsStore';
const productStore = useProductStore();
const commentStore = useCommentsStore();
const items = productStore.products
const comments = commentStore.comments
</script>

<template>
  <main>
    <Slider />
    <section class="container">
      <div class="d-flex justify-between align-center m-b-18">
            <h2>Акции</h2>
            <ButtonWithIcon class="bg-main p-12-16-12-24" :icon="'chevronR'" :side="'after'" :handler="() => 'Hello'">Все акции</ButtonWithIcon>
      </div>
      <CardList :card-type="'product'" :column="2">
        <ProductCard v-for="item in items.slice(0, 4)" :link="{ name: 'product', params: { category: item.category, subcategory: item.subcategory, product: item.description}}" :isRow="true" :key="item.id" :item="item" />
      </CardList>
    </section>
    <section class="container">
      <h2 class="m-b-18">Популярные категории</h2>
      <CardList :card-type="'category'" :column="6">
        <CategoryCard v-for="item in items" :key="item.id" :link="{ name: 'category', params: { category: 'tools'}}" :header="item.description" :image-path="item.imagePath" />
      </CardList>
    </section>
    <section class="container">
      <h2 class="m-b-18">Популярные товары</h2>
      <CardList :card-type="'product'" :column="4">
        <ProductCard v-for="item in items.slice(0, 8)" :link="{ name: 'product', params: { category: item.category, subcategory: item.subcategory, product: item.description}}" :key="item.id" :item="item" />
      </CardList>
    </section>
    <section class="container">
      <div class="d-flex justify-between align-center m-b-18">
            <h2>Популярные бренды</h2>
            <ButtonWithIcon class="bg-main p-12-16-12-24" :icon="'chevronR'" :side="'after'" :handler="() => 'Hello'">Все бренды</ButtonWithIcon>
      </div>
      <CardList :card-type="'brand'" :column="6">
        <BrandCard v-for="item in items" :key="item.id" :item="item" />
      </CardList>
    </section>
    <section class="p-80-140 bg-light-grey overflow-x-hidden">
      <div class="d-flex justify-between align-center m-b-18">
            <h2>Отзывы</h2>
            <div class="group-controls">
              <ButtonWithIcon class="button-icon button--border" :icon="'chevronL'" id="toLeftCarousel" :handler="() => {}"  />
              <ButtonWithIcon class="button-icon button--border" :icon="'chevronR'" id="toRightCarousel" :handler="() => {}"  />
            </div>
      </div>
      <Carousel :items="comments" :to-left-id="'toLeftCarousel'" :to-right-id="'toRightCarousel'" />
    </section>
    <AboutCompany />
  </main>
</template>
