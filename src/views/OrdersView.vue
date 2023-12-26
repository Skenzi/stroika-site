<script lang="ts" setup>
import PageDescription from './components/page-description/PageDescription.vue';
const orders = [
    {
        "date": '24 мая',
        "id": '34078988-0047',
        "status": 'Оплачен',
        "product": {
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        }
    },
    {
        "date": '24 мая',
        "id": '34078988-0047',
        "status": 'Оплачен',
        "product": {
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        }
    },
    {
        "date": '24 мая',
        "id": '34078988-0047',
        "status": 'Оплачен',
        "product": {
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        }
    },
    {
        "date": '24 мая',
        "id": '34078988-0047',
        "status": 'Оплачен',
        "product": {
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        }
    },
    {
        "date": '24 мая',
        "id": '34078988-0047',
        "status": 'Оплачен',
        "product": {
            "description": "Product A",
            "price": 19.99,
            "discount": 15,
            "category": 'Сантехника',
            "subcategory": 'Сухие смеси',
            imagePath: '/images/cardImage.png'
        }
    },
]
</script>

<template>
    <main>
        <PageDescription :header="'Заказы'" :background-image-path="'/images/backgroundBrands.png'" />
        <div class="container">
            <div class="order" v-for="order of orders" :key="order.id">
                <img :src="order.product?.imagePath" class="order__image" />
                <div class="order__product-description">
                    <div class="order__product-text">{{ order.product?.description }}</div>
                    <div class="order__product-price">{{ order.product.price }}</div>
                    <div class="order__product-text">1 шт.</div>
                </div>
                <div class="order__data">
                    <div>
                        <div class="order__header">Заказ от {{ order.date }}</div>
                        <div class="order__text">{{ order.id }}</div>
                    </div>
                    <div>
                        <div class="order__header">Статус</div>
                        <div class="order__text">{{ order.status }}</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.order {
    display: flex;
    width: 100%;
    max-height: 134px;
}

.order:nth-child(1n+2) {
    margin-top: 16px;
}

.order__image {
    height: auto;
    max-width: 180px;
    border: 1px solid #E8E9EA;
    border-right: none;
}

.order__product-description {
    padding: 16px;
    height: initial;
    flex: 1;
    border: 1px solid #E8E9EA;
}

.order__data {
    display: flex;
    max-width: 392px;
    width: 100%;
    gap: 57px;
    padding: 16px;
    height: initial;
    border: 1px solid #E8E9EA;
    border-left: none;
}

.order__header {
    color: var(--Text-2F323A, #2F323A);
    font-size: 18px;
    font-weight: 700;
    line-height: 136%;
}

.order__text {
    color: var(--Text-2F323A, #2F323A);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
}

.order__product-text {
    color: var(--Text-2F323A, #2F323A);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
}

.order__product-price {
    margin-top: 12px;
    margin-bottom: 12px;
    color: var(--Text-171B24, #171B24);
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
}</style>