<script lang="ts" setup>
import Button from '../../../ui-kit/buttons/AppButton.vue';
import SearchBox from '../../../ui-kit/searchbox/SearchBox.vue';
import WrapperArrow from '../../../ui-kit/wrapperArrow/WrapperArrow.vue';
import { useModalStore } from '../../../stores/modal';
const modalStore = useModalStore();
const cities = [
    'Москва',
'Санкт-Петербург',
'Новосибирск',
'Екатеринбург',
'Казань',
'Нижний Новгород',
'Челябинск',
'Самара',
'Ростов-на-Дону',
'Уфа',
'Омск',
'Красноярск',
'Воронеж',
'Пермь',
'Волгоград',
]
</script>

<template>
        <div class="modal">
            <h2 class="modal__header">Выберите ваш город</h2>
            <SearchBox class="m-24-0" />
            <div class="cities-list">
                <WrapperArrow v-for="city of cities" :key="city">
                    <Button :handler="()=>{}" class="p-0 text-s-16">{{city}}</Button>
                </WrapperArrow>
            </div>
        </div>
</template>

<style scoped>
.modal {
    max-width: 572px;
}
.m-24-0 {
    margin: 24px 0;
}
.cities-list {
    display: flex;
    flex-wrap: wrap;
}
.cities-list > * {
    flex: 1;
    flex-basis: calc(100% / 3 - 24px);
}
.cities-list > *:nth-child(1n+4) {
    margin-top: 16px;
}
</style>