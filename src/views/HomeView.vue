<script setup lang="ts">
import ContentBlock from './components/content-block/ContentBlock.vue';
import Slider from '../components/slider/Slider.vue';
import Carousel from '../modules/carousel/Carousel.vue';
import ButtonWithIcon from '../ui-kit/buttons/ButtonWithIcon.vue';
import ButtonIcon from '../ui-kit/buttons/ButtonIcon.vue';
import CardList from '../modules/card-list/CardList.vue';
import AboutCompany from './components/about-company/AboutCompany.vue';

const items = [
    {
      "id": "001",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "002",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "003",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "004",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "005",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "006",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "007",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "008",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "009",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "010",
      "description": "Product A",
      "price": 19.99,
      "discount": 15,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "011",
      "description": "Product B",
      "price": 9.99,
      "discount": 10,
      imagePath: '/images/cardImage.png'
    },
    {
      "id": "012",
      "description": "Product C",
      "price": 24.99,
      "discount": 20,
      imagePath: '/images/cardImage.png'
    }
  ]
  let comments = [
  {
    name: "John",
    text: "Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽",
    avatarPath: "/avatars/Avatars.svg",
    date: "2022-01-01",
  },
  {
    name: "Emma",
    text: "I'm doing great, thank you!",
    avatarPath: "/avatars/Avatars.svg",
    date: "2022-01-02",
  },
  {
    name: "Michael",
    text: "Hey, what's up?",
    avatarPath: "/avatars/Avatars.svg",
    date: "2022-01-03",
  },
  {
    name: "Sarah",
    text: "Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽",
    avatarPath:  "/avatars/Avatars.svg",
    date: "2022-01-20",
  }
];
</script>

<template>
  <main>
    <Slider />
    <ContentBlock>
      <div class="d-flex justify-between align-center m-b-16">
            <h2>Акции</h2>
            <ButtonWithIcon class="bg-main p-12-16-12-24" :text="'Все акции'" :icon="'/icons/angle.png'" :side="'after'" :handler="() => 'Hello'"  />
      </div>
      <CardList :card-type="'product'" :column="2" :items="items" :position="'row'" />
    </ContentBlock>
    <ContentBlock>
      <h2 class="m-b-16">Популярные категории</h2>
      <CardList :card-type="'category'" :column="6" :items="items" />
    </ContentBlock>
    <ContentBlock>
      <h2 class="m-b-16">Популярные товары</h2>
      <CardList :card-type="'product'" :column="4" :items="items" />
    </ContentBlock>
    <ContentBlock>
      <div class="d-flex justify-between align-center m-b-16">
            <h2>Популярные бренды</h2>
            <ButtonWithIcon class="bg-main p-12-16-12-24" :text="'Все бренды'" :icon="'/icons/angle.png'" :side="'after'" :handler="() => 'Hello'"  />
      </div>
      <CardList :card-type="'brand'" :column="6" :items="items" />
    </ContentBlock>
    <ContentBlock class="bg-light-grey">
      <div class="d-flex justify-between align-center m-b-16">
            <h2>Отзывы</h2>
            <div>
              <ButtonIcon class="button--border" :icon="'/icons/angle.png'" id="toLeftCarousel" :handler="() => 'Hello'"  />
              <ButtonIcon class="button--border" :icon="'/icons/angle.png'" id="toRightCarousel" :handler="() => 'Hello'"  />
            </div>
      </div>
      <Carousel :items="comments" :to-left-id="'toLeftCarousel'" :to-right-id="'toRightCarousel'" />
    </ContentBlock>
    <ContentBlock :size="'big'">
      <AboutCompany />
    </ContentBlock>
  </main>
</template>
