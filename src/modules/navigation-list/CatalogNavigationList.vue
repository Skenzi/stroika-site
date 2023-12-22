<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from '../../ui-kit/buttons/Button.vue';
import CategoryCard from '../../components/card/CategoryCard.vue';
import WrapperArrow from '../../ui-kit/wrapperArrow/WrapperArrow.vue';
import { useProductStore } from '../../stores/productStore';
const navItems = [
'A-progress.ru', 'A-progress.ru1', 'A-progress.ru2', 'Профиль для гипсокартона3', 'Профиль для гипсокартона4', 'Профиль для гипсокартона5', 'Профиль для гипсокартона6'
]
const productStore = useProductStore();
const sortNavMarker = ref('');
</script>

<template>
    <div class="navigation-list">
        <nav class="navigation-list__nav">
            <Button v-for="item in navItems" class="nav__item" :key="item" :class="{ 'nav__item--active': sortNavMarker === item}" :handler="() => sortNavMarker = item">{{ item }}</Button>
        </nav>
        <div class="navigation-list__categories">
            <div class="navigation-list__category" v-for="category, categoryKey in productStore.categories" :key="categoryKey">
                <CategoryCard class="category__image" :image-path="'/images/cardImage.png'" :link="{ name: 'category', params: { category: categoryKey}}" :header="category.name" />
                <div class="navigation-list__subcategories">
                    <div v-for="subcategory in category.subcategories" :key="subcategory" class="w-full">
                        <WrapperArrow>
                            <RouterLink :to="{ name: 'subcategory', params: { category: categoryKey, subcategory}}">{{ subcategory }}</RouterLink>
                        </WrapperArrow>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navigation-list__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.navigation-list__subcategories .button {
    padding: 0;
    text-align: left;
}
.navigation-list__subcategories .button:nth-of-type(1n+2) {
    margin-top: 12px;
}
.navigation-list__wrapper {
    display: flex;
    margin-top: 8px;
    flex-wrap: wrap;
    gap: 8px;
}
.nav__item {
    padding: 4px 8px;
    border: 1px solid #D1D1D3;
    font-weight: 500;
    line-height: 136%;
}
.nav__item--active {
    background-color: var(--main-color);
}
.navigation-list__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
.navigation-list__category {
    flex: 1;
    margin-top: 80px;
    flex-basis: 278px;
}
</style>