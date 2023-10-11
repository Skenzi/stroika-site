<script lang="ts" setup>
import { ref } from 'vue';
import Button from '../../ui-kit/buttons/Button.vue';
import CategoryCard from '../../components/card/CategoryCard.vue';
const navItems = [
'A-progress.ru', 'A-progress.ru1', 'A-progress.ru2', 'Профиль для гипсокартона3', 'Профиль для гипсокартона4', 'Профиль для гипсокартона5', 'Профиль для гипсокартона6'
]
const categoryItems = {
    'Сантехника': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника1': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника2': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника3': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника4': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника5': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника6': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
],
'Сантехника7': [
'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона', 'Профиль для гипсокартона'
]
}

const sortNavMarker = ref('');
</script>

<template>
    <div class="navigation-list">
        <nav class="navigation-list__nav">
            <Button v-for="item in navItems" class="nav__item" :key="item" :class="{ 'nav__item--active': sortNavMarker === item}" :handler="() => sortNavMarker = item">{{ item }}</Button>
        </nav>
        <div class="navigation-list__categories">
            <div class="navigation-list__category" v-for="category, categoryKey in categoryItems" :key="categoryKey">
                <RouterLink :to="{ name: 'category', params: { category: categoryKey}}">
                    <CategoryCard class="category__image" :image-path="'/images/cardImage.png'" :header="categoryKey" />
                    <router-view></router-view>
                </RouterLink>
                <div class="navigation-list__subcategories">
                    <Button v-for="brand in category" :key="brand">{{ brand }}</Button>
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
.navigation-list__sublist {
    display: flex;
    padding: 28px 0px;
}
.navigation-list__sublist:nth-of-type(1n+2) {
    border-top: 1px solid #E8E9EA;
}
.navigation-list__sublist:last-of-type {
    padding-bottom: 0;
}
.sublist__header {
    flex: 1;
}
.navigation-list__subcategories .button {
    padding: 0;
    text-align: left;
}
.navigation-list__subcategories .button:hover::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background: url('/icons/arrow.png');
    background-size: contain;
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