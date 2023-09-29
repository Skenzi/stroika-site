<script lang="ts" setup>
import Button from '../ui-kit/buttons/Button.vue';
import ContentBlock from './components/content-block/ContentBlock.vue';
</script>

<template>
    <main>
        <div></div>
        <div>
            <img src="/images/cardImage.png" />
            <div>
                <h2>Шпатлевка масляно-клеевая 3кг Л-С</h2>
                <div>В наличии</div>
                <div>212 ₽</div>
                <div>
                    <Button class="bg-main">В корзину</Button>
                </div>
                <div>Поставщик: Аксон</div>
                <div>
                    <img />
                    <span>Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</span>
                </div>
            </div>
        </div>
        <section>
            <h2>Описание</h2>
        </section>
        <ContentBlock>
            <h2>Похожие товары</h2>
        </ContentBlock>
    </main>
</template>

<style scoped>

</style>