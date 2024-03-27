<script lang="ts" setup>
import PageDescription from './components/page-description/PageDescription.vue';
import Button from '../ui-kit/buttons/Button.vue';
import Counter from '../components/counter/Counter.vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
const products = cartStore.getProducts();
</script>

<template>
    <main class="container">
        <PageDescription :header="'Корзина'" :background-image-path="'/src/assets/images/backgroundBrands.png'" />
        <section class="cart">
            <div class="cart__order-info">
                <section class="cart__total">
                    <div class="cart__total-header">Итого</div>
                    <div class="cart__total-row">
                        <p>Количество товара</p>
                        <p>{{ products.length }}</p>
                    </div>
                    <div class="cart__total-row">
                        <p>Товаров на сумму</p>
                        <p>{{ products.length }}</p>
                    </div>
                    <div class="cart__total-row">
                        <p>Поставщик</p>
                        <p>{{ products.length }}</p>
                    </div>
                </section>
                <div class="cart__button-wrapper">
                    <Button :handler="() => console.log('Ordered')" class="bg-main w-full">Оформить заказ</Button>
                </div>
                <section>
                    <div class="cart__hint">
                        <img src="/icons/car.svg" />
                        <p>Можно сделать заказ только от одного поставщика</p>
                    </div>
                    <div class="cart__hint">
                        <img src="/icons/car.svg" />
                        <p>Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</p>
                    </div>
                    <div class="cart__hint">
                        <img src="/icons/car.svg" />
                        <p>Точная сумма доставки будет определена после после подтверждения заказа</p>
                    </div>
                </section>
            </div>
            <div class="cart__products">
                <article class="cart__product" v-for="product of products" :key="product.id">
                    <div class="product__image-wrapper">
                        <img class="product__image" :src="product.imagePath" />
                    </div>
                    <section class="product__info">
                        <div class="product__col">
                            <p>Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</p>
                            <p class="product__price">449 ₽</p>
                            <Counter :product-id="product.id" />
                        </div>
                        <div class="product__col">
                            <div>
                                <p>Код товара:</p>
                                <p>34078988-0047</p>
                            </div>
                                <Button :handler="() => cartStore.removeProduct(product.id)" class="button--border w-full">Удалить товар</Button>
                        </div>
                    </section>
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped>
.cart {
    display: flex;
    margin-top: 40px;
}
.cart__order-info {
    max-width: 278px;
}
.cart__products {
    flex: 1;
    margin-left: 16px;
}
.cart__total {
    padding: 16px;
    border: 1px solid var(--BG-E8E9EA, #E8E9EA);
    border-bottom: none;
}
.cart__total-header {
    color: var(--Text-171B24, #171B24);
font-size: 18px;
font-weight: 700;
line-height: 136%;
}
.cart__total-row {
    display: flex;
    justify-content: space-between;
    color: var(--Dark, #333);
font-size: 16px;
font-weight: 500;
line-height: 150%;
}
.cart__product {
    display: flex;
}
.cart__product:nth-child(1n+2) {
    margin-top: 16px;
}
.cart__button-wrapper {
    padding: 16px;
    border: 1px solid var(--BG-E8E9EA, #E8E9EA);
}
.cart__hint {
    margin-top: 16px;
    display: flex;
    gap: 10px;
}
.product__image {
    max-width: 278px;
    max-height: 208px;
}

.product__image-wrapper {
    border: 1px solid var(--BG-E8E9EA, #E8E9EA);
}
.product__info {
    display: flex;
    height: auto;
    border: 1px solid var(--BG-E8E9EA, #E8E9EA);
    border-left: none;
}
.product__price {
    margin-top: auto;
    margin-bottom: 16px;
    color: var(--Text-171B24, #171B24);
font-size: 20px;
font-weight: 700;
line-height: 140%; 
}
.product__col {
    max-width: 262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    padding: 16px;
}
</style>