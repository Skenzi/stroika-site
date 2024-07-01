<script lang="ts" setup>
import { ref, computed } from 'vue';
import Button from '../../ui-kit/buttons/AppButton.vue';
const props = defineProps<{
    items: Array<string>
}>()
const rusNavItems = [
'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
]
const engNavItems = [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z',
]
const sortedBrands = [...engNavItems, ...rusNavItems].reduce<{[key: string]: Array<string>}>((acc, marker) => {
    acc[marker] = props.items.filter((brand) => brand.indexOf(marker) === 0);
    return acc;
}, {})
const sortNavMarker = ref('');
const sortedNavItems = computed(() => {
    if(sortNavMarker.value === '') return [...engNavItems, ...rusNavItems];
    return [...engNavItems, ...rusNavItems].filter((item) => {
        return item.indexOf(sortNavMarker.value) === 0
    });
})
</script>

<template>
    <div class="navigation-list">
        <nav class="navigation-list__nav">
            <div class="navigation-list__wrapper">
                <Button class="nav__item" :text="'Все'" :class="{ 'nav__item--active': sortNavMarker === ''}" :handler="() => sortNavMarker = ''">Все</Button>
                <Button v-for="item in engNavItems" class="nav__item" :key="item" :class="{ 'nav__item--active': sortNavMarker === item}" :handler="() => sortNavMarker = item">{{ item }}</Button>
            </div>
            <div class="navigation-list__wrapper">
                <Button v-for="item in rusNavItems" class="nav__item" :key="item" :class="{ 'nav__item--active': sortNavMarker === item}" :handler="() => sortNavMarker = item">{{item}}</Button>
            </div>
        </nav>
        <section class="navigation-list__sublist" v-for="itemNav in sortedNavItems" :key="itemNav">
            <h2 class="sublist__header">{{ itemNav }}</h2>
            <div class="sublist__body">
                <Button :handler="()=>{}" v-for="brand in sortedBrands[itemNav]" :key="brand">{{brand}}</Button>
            </div>
        </section>
    </div>
</template>

<style scoped>
.navigation-list__nav {

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
.sublist__body {
    display: flex;
    flex-wrap: wrap;
    flex: 4;
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
.nav__item:nth-of-type(1n+2) {
    width: 36px;
}
.nav__item--active {
    background-color: var(--main-color);
}
</style>