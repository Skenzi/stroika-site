<script lang="ts" setup>
import { onMounted } from 'vue';
    import { RouterLink } from 'vue-router'
    import SearchBox from '../../ui-kit/searchbox/SearchBox.vue'
    import ButtonWithIcon from '../../ui-kit/buttons/ButtonWithIcon.vue'
    import DividingLine from '../../ui-kit/line/DividingLine.vue'

    const buttonHandler = () => {
        const arr = [1,2,3,4,5,6]
        console.log(arr.slice(-1))
    }
    onMounted(() => {
        const middleRow = document.querySelector('.header__row--middle');
        window.addEventListener('scroll', () => {
            if(window.pageYOffset >= 44) {
                middleRow.classList.add('position-fixed');
            } else {
                middleRow.classList.remove('position-fixed');
            }
        })
    })
</script>

<template>
    <header class="header">
        <div class="header__row header__row--top">
            <ButtonWithIcon style="font-size: 15px;" :icon="'/icons/metka.png'" :text="'Москва'" :handler="buttonHandler" />
            <nav>
                <RouterLink :to="'/brands'" class="header__nav-item">Бренды</RouterLink>
                <RouterLink :to="'/delivery'" class="header__nav-item">Доставка</RouterLink>
                <RouterLink :to="'/refund'" class="header__nav-item">Возврат</RouterLink>
                <RouterLink :to="'/documentation'" class="header__nav-item">Документация</RouterLink>
                <RouterLink :to="'/contacts'" class="header__nav-item">Контакты</RouterLink>
            </nav>
        </div>
        <div class="header__row header__row--middle">
            <div class="header__logo">
            

        </div>
        <ButtonWithIcon class="bg-main p-12-20" :icon="'/icons/catalogIcon.png'" :text="'Каталог'" :handler="buttonHandler" />
        <SearchBox class="m-l-16" />
        <div class="header__actions m-l-16">
            <ButtonWithIcon style="font-size: 15px;" class="flex-col" :icon="'/icons/profile.png'" :text="'Профиль'" :handler="buttonHandler" />
            <ButtonWithIcon style="font-size: 15px;" class="flex-col" :icon="'/icons/order.png'" :text="'Заказы'" :handler="buttonHandler" />
            <ButtonWithIcon style="font-size: 15px;" class="flex-col" :icon="'/icons/cart.png'" :text="'Корзина'" :handler="buttonHandler" />
        </div>
    </div>
    <DividingLine />
    <div class="header__row">
        <nav class="header__nav-bottom">
            <a href="#" class="header__nav-item">Акции</a>
            <a href="#" class="header__nav-item">Строительные материалы</a>
            <a href="#" class="header__nav-item">Керамическая плитка</a>
            <a href="#" class="header__nav-item">Краски</a>
            <a href="#" class="header__nav-item">Сантехника</a>
            <a href="#" class="header__nav-item">Напольные покрытия</a>
            <a href="#" class="header__nav-item">Инструменты</a>
            <a href="#" class="header__nav-item">Обои</a>
            <a href="#" class="header__nav-item">Окна</a>
        </nav>
    </div>
    <DividingLine />
</header></template>

<style scoped>
.header__row {
    display: flex;
    padding: 10px 140px;
}

.header__row--top {
    justify-content: space-between;
}
.header__nav-bottom {
    display: flex;
    flex: 1;
    justify-content: space-between;
}
.header__row--top .header__nav-item:nth-child(1n + 2) {
    margin-left: 24px;
}

.header__row--middle {
    max-width: 1440px;
    width: 100%;
    padding: 16px 140px;
    z-index: 99999;
    background-color: white;
}

.header__logo {
    width: 180px;
    height: 46px;
    margin-right: auto;
    background: url('/src/assets/logo.svg') no-repeat;
    background-size: contain;
}

.header__actions {
    display: flex;
}

.header__actions .button {
    padding-right: 16px;
}
.header__actions .button:last-child {
    padding-right: 9px;
}
.m-l-16 {
    margin-left: 16px;
}
</style>