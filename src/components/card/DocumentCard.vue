<script lang="ts" setup>
import Button from "../../ui-kit/buttons/AppButton.vue"

</script>

<template>
    <div class="document-card">
        <div class="document-card__head">
            <div class="document-card__document">
                <div class="document__name">Оферта «Безопасная сделка»</div>
                <div class="document__row document__row--first"></div>
                <div class="document__row"></div>
            </div>
        </div>
        <div class="document-card__body">
            <div class="document-body__name">Оферта «Безопасная сделка»</div>
            <div>PDF · 10 МБ</div>
            <Button :handler="()=>{}" class="document-card__button">Скачать</Button>
        </div>
    </div>
</template>

<style scoped>
.document-card {
    flex: 1;
    min-width: 376px;
    position: relative;
    background-color: var(--white);
}
.document-card__head {
    padding: 37px 66px 0 50px;
    background: rgba(252, 236, 65, 0.70);
}
.document-card__body {
    padding: 16px;
}
.document-card__document {
    padding: 25px 20px 15px 20px;
    background-color: #FAFAFA;
}
.document__name {
    text-align: center;
}
.document-body__name {
    margin-bottom: 4px;
font-size: 18px;
font-weight: 700;
line-height: 136%;
}
.document__row {
    height: 20px;
    margin-top: 15px;
    background-color: #E9E9E9;
}
.document__row--first {
    max-width: 178px;
}
.document-card__button {
    margin-top: 16px;
    width: 100%;
    background-color: #FCEC41;
}
</style>