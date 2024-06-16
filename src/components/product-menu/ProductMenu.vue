<script lang="ts" setup>
import { ref } from 'vue';
import RangeInput from '../../ui-kit/range-input/RangeInput.vue';
import SearchBox from '../../ui-kit/searchbox/SearchBox.vue';
import Dropdown from '../../ui-kit/dropdown/Dropdown.vue';
import Button from '../../ui-kit/buttons/Button.vue';
import CheckBox from '../../ui-kit/checkbox/CheckBox.vue';
const inputState = ref('Аксон')
const formHandler = (ev: Event) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget as HTMLFormElement);
}
</script>

<template>
    <form :onSubmit="formHandler" class="w-sm w-full">
        <div class="border-wrapper border-wrapper--sm">
            <div>
                <h3 class="m-b-12">Цена</h3>
                <RangeInput :start="10" :end="100" :step="10" />
            </div>
            <div class="m-t-32">
                <h3 class="m-b-12">Бренд</h3>
                <SearchBox />
                <div class="checkbox-container m-t-12">
                    <CheckBox name="test" innerText="Мангал" />
                    <CheckBox innerText="Веранда" />
                    <CheckBox innerText="Маяхи" />
                    <CheckBox innerText="Береза" />
                </div>
            </div>
            <div class="m-t-32">
                <h3 class="m-b-12">Поставщик</h3>
                <Dropdown :inputState="inputState">
                        <li>
                            <Button :handler="()=>{inputState = 'Akson'}">Аксон</Button>
                        </li>
                        <li>
                            <Button :handler="()=>{inputState = 'Bkson'}">Вксон</Button>
                        </li>
                        <li>
                            <Button :handler="()=>{inputState = 'Skson'}">Сксон</Button>
                        </li>
                        <li>
                            <Button :handler="()=>{inputState = 'Ekson'}">Ексон</Button>
                        </li>
                        <li>
                            <Button :handler="()=>{}">Аксон</Button>
                        </li>
                        <li>
                            <Button :handler="()=>{}">Аксон</Button>
                        </li>
                        <li>
                            <Button :handler="()=>{}">Аксон</Button>
                        </li>
                </Dropdown>
            </div>
        </div>
        <div class="border-wrapper border-wrapper--sm w-sm border-t-none">
            <Button :handler="()=>{}" class="bg-main w-full">Применить</Button>
            <Button :handler="()=>{}" class="button--border w-full m-t-12">Сбросить</Button>
        </div>
    </form>
</template>

<style scoped>
.checkbox-container {
    max-height: 204px;
    overflow-y: auto;
}
.m-t-32 {
    margin-top: 32px;
}
.m-b-12 {
    margin-bottom: 12px;
}
.p-t-12 {
    padding-top: 12px;
}
.border-t-none {
    border-top: none;
}
.border-t-1 {
    border-top: 1px solid #E8E9EA;
}
</style>