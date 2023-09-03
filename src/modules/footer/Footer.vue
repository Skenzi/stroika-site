<script lang="ts" setup>

</script>

<template>
    <footer class="footer">
        <div class="footer__item">
            <ul class="footer__contacts">
                <li class="footer__logo"></li>
                <li class="contacts__item contacts__item--mail">
                    <a href="mailto:info@stroykastore.ru">info@stroykastore.ru</a>
                </li>
                <li class="contacts__item contacts__item--address">
                    Москва, ул. Камушкина 10
                </li>
            </ul>
            <ul class="footer__links">
                <li>
                    <a href="#">Личный кабинет</a>
                </li>
                <li>
                    <a href="#">Заказы</a>
                </li>
                <li><a href="#">Избранное</a></li>
                <li><a href="#">Корзина</a></li>
            </ul>
            <ul class="footer__links">
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Акции</a></li>
                <li><a href="#">Бренды</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <ul class="footer__links">
                <li><a href="#">Стать продавцом</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Возврат</a></li>
                <li><a href="#">Документация</a></li>
            </ul>
        </div>
        <hr class="line m-40-0-16-0" />
        <div class="footer__item">
            <div>© СтройкаСтор</div>
            <div class="footer__credit-cards">
                <img src="/icons/visa.png" alt="visa" />
                <img src="/icons/mastercard.png" alt="mastercard" />
                <img src="/icons/maestro-card.png" alt="maestro" />
                <img src="/icons/mir.png" alt="mir" />
            </div>
            <div>Cделано в KRUGLOV STUDIO</div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        padding: 40px 140px 20px 140px;
        background-color: var(--grey);
    }
    .footer__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer * {
        color: var(--white);
    }
    .footer ul {
        list-style: none;
    }
    .footer__links li:nth-child(1n+2) {
        margin-top: 12px;
    }
    .footer__logo {
        height: 46px;
        background: url(/src/assets/logo.svg) no-repeat;
        background-size: contain;
    }
    .footer .contacts__item--mail {
        margin-top: 22px;
        margin-bottom: 16px;
    }
    .contacts__item {
        display: flex;
        align-items: center;
    }
    .contacts__item::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    .contacts__item--mail::before {
        background: url(/icons/mail.png) no-repeat;
    }
    .contacts__item--address::before {
        background: url(/icons/metka.png) no-repeat;
    }
    .footer__credit-cards {
        display: flex;
        align-items: center;
        gap: 16px;
    }
</style>