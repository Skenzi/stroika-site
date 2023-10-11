<script lang="ts" setup>
import RangeInput from '../../ui-kit/range-input/RangeInput.vue';
import SearchBox from '../../ui-kit/searchbox/SearchBox.vue';
import Dropdown from '../../ui-kit/dropdown/Dropdown.vue';
import Button from '../../ui-kit/buttons/Button.vue';
import CheckBox from '../../ui-kit/checkbox/CheckBox.vue';
</script>

<template>
    <div class="w-sm w-full">
        <div class="border-wrapper border-wrapper--sm">
            <div>
                <h3 class="m-b-12">Цена</h3>
                <RangeInput :start="0" :end="100" :step="1" />
            </div>
            <div class="m-t-32">
                <h3 class="m-b-12">Бренд</h3>
                <SearchBox />
                <div class="checkbox-container m-t-12">
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                </div>
            </div>
            <div class="m-t-32">
                <h3 class="m-b-12">Поставщик</h3>
                <Dropdown>
                    <ul>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                        <li>Аксон</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
        <div class="border-wrapper border-wrapper--sm w-sm border-t-none">
            <Button class="bg-main w-full">Применить</Button>
            <Button class="button--border w-full m-t-12">Сбросить</Button>
        </div>
    </div>
</template>

<style scoped>
.checkbox-container {
    max-height: 204px;
    overflow-y: scroll;
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