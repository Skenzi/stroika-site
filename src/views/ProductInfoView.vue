<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import Button from '../ui-kit/buttons/Button.vue';
import CardList from '../modules/card-list/CardList.vue';
import ProductCard from '../components/card/ProductCard.vue';
import Counter from '../components/counter/Counter.vue';
import LinksPath from '../ui-kit/linksPath/LinksPath.vue';

const { products } = useProductStore()
const route = useRoute()
console.log(route.path, route.params, route.matched[0].path)
const items = products.slice(0, 4)
</script>

<template>
    <main class="container">
        <LinksPath />
        <section class="product">
            <div class="d-flex">
                <div class="product__image-wrapper">
                    <img class="product__image" src="/src/assets/images/cardImage.png" />
                </div>
                <section class="product__main-info">
                    <h2>Шпатлевка масляно-клеевая 3кг Л-С</h2>
                    <div class="product__available"><img src="/src/assets/icons/check-circle.svg" width="24" height="24" />В
                        наличии</div>
                    <p class="product__price">212 ₽</p>
                    <form class="product__form">
                        <Button :handler="()=>{}" class="bg-main" type="submit">В корзину</Button>
                        <Counter :product-id="'test'" />
                    </form>
                    <p>Поставщик: Аксон</p>
                    <div class="product__delivery">
                        <img src="/src/assets/icons/car.svg" />
                        <p>Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно
                            забрать самостоятельно от поставщика</p>
                    </div>
                </section>
            </div>
            <section class="product__description">
                <h2>Описание</h2>
                <p class="product__description-p">
                    Штукатурка Волма Слой, 30кг
                    Штукатурка на гипсовой основе для ручного нанесения.
                </p>
                <p class="product__description-p">
                    НАЗНАЧЕНИЕ:
                    Выравнивание оснований в помещениях нормальной влажности перед нанесением декоративного слоя;
                    Создание ровной поверхности на цементных, цементно-известковых, бетонных, кирпичных, гипсовых и
                    гипсокартонных плоскостях.
                </p>
                <p>
                    ПРЕИМУЩЕСТВА:
                    Экономичная (расход продукта 8-9 кг на 1 кв.м, не требует покрытия шпаклевкой);
                    Пластичная;
                    Слой нанесения от 5 до 60мм;
                    Можно использовать для создания декоративных поверхностей.
                </p>
                <p class="product__description-p">
                    ИНСТРУКЦИЯ ПО ПРИМЕНЕНИЮ:
                    Подготовка основания:
                    Поверхность нужно очистить и просушить. Вещества, ослабляющие сцепление с поверхностью, такие как жир,
                    пыль и т.п. должны быть удалены.
                    Температурный режим в помещении должен быть не ниже +5 градусов.
                    Основания, хорошо впитывающие влагу, предварительно обработать составом «ВОЛМА-Универсал» или
                    «ВОЛМА-Интерьер». Гладкие (например, бетон) обработать составом «Волма-Контакт», просушить.
                    Приготовление смеси:
                    Емкость, в которой будут производить замес, и рабочий инструмент должны быть чистыми и сухими.
                    В воду комнатной температуры постепенно всыпать смесь из расчета на 1 кг смеси – 0,6-0,65 л воды.
                    Замешивать строительным миксером или дрелью с насадкой. Смесь должна стать однородной.
                    Дать отстояться в течение нескольких минут и снова замешать. Раствор можно наносить в течение 20 минут.
                    Нанесение:
                    Смесь наносить ручным способом, используя железный шпатель. Разровнять h-образным правилом.
                    Если состав наносится в два слоя, то на первый до высыхания наносятся насечки, после полного высыхания
                    наносится
                    второй слой. После схватывания последнего слоя (примерно через 60 минут) правилом трапецией подрезать
                    неровности.
                    Если в работе использовались маячки, рекомендуется их удалить и заделать оставшиеся углубления.
                    Для того чтобы загладить поверхность нужно через 10-20 минут после подрезки смочить водой, используя
                    губчатую терку,
                    и затереть круговыми движениями.
                    Далее загладить металлическим шпателем.
                    Для того чтобы поверхность стала глянцевой нужно в течение суток, но не ранее трех часов, повторно смочить
                    поверхность
                    водой и загладить шпателем.
                </p>
                <p class="product__description-p">
                    РЕКОМЕНДАЦИИ:
                    После окончания штукатурных работ основание рекомендуется прогрунтовать;
                    Поверхности, которые не будут штукатуриться (пол, окна, мебель и т.п.) необходимо закрывать;
                    Использованные инструмент и емкости необходимо вымыть водой после завершения работ.
                </p>
                <p class="product__description-p">
                    МЕРЫ ПРЕДОСТОРОЖНОСТИ:
                    При работе защищать кожу, глаза и дыхательные пути.
                </p>
            </section>
        </section>
        <section class="container--all">
            <h2>Похожие товары</h2>
            <CardList :column="4">
                <ProductCard v-for="item in items"
                    :link="{ name: 'product', params: { category: item.category, subcategory: item.subcategory, product: item.description } }"
                    :key="item.id" :item="item" />
            </CardList>
        </section>
    </main>
</template>

<style scoped>
.product {
    margin-top: 40px;
}

.product__image-wrapper {
    height: initial;
    flex: 1;
    border: 1px solid #E8E9EA;
    border-right: none;
}
.product__image {
    height: 100%;
    width: 100%;
}
.product__description {
    padding: 60px 200px;
    margin-top: 40px;
    border: 1px solid #E8E9EA;
}
.product__description-p {
    margin-top: 14px;
}
.product__form {
    display: flex;
    margin: 24px 0 35px 0;
    gap: 12px;
}
.product__form .counter {
    max-width: 144px;
}
.product__form .button {
    width: 100%;
    max-width: 246px;
}
.product__main-info {
    flex: 1;
    padding: 24px;
    border: 1px solid #E8E9EA;
}
.product__delivery {
    margin-top: 12px;
    display: flex;
    gap: 12px;
}
.product__available {
    display: flex;
    margin: 12px 0;
    color: #3BAA35;
    gap: 5px;
}

.product__price {
    font-size: 24px;
    font-weight: 600;
    line-height: 130%;
}</style>