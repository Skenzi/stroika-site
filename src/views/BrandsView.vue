<script setup lang="ts">
import ContentBlock from './components/content-block/ContentBlock.vue';
import CardList from '../modules/card-list/CardList.vue';
import DescriptionPage from './components/description-page/DescriptionPage.vue';
import BrandNavigationList from '../modules/navigation-list/BrandNavigationList.vue';
import CatalogNavigationList from '../modules/navigation-list/CatalogNavigationList.vue'
import ButtonWithIcon from '../ui-kit/buttons/ButtonWithIcon.vue';

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
</script>

<template>
  <main>
    <DescriptionPage class="main-top" :header="'Все бренды'" :backgroundImagePath="'/images/backgroundBrands.png'" :pathEnd="'Все продавцы'" />
    <ContentBlock>
      <div class="d-flex justify-between align-center m-b-16">
            <h2>Популярные бренды</h2>
            <ButtonWithIcon class="p-12-16-12-24" :text="'Все бренды'" :icon="'/icons/angle.png'" :side="'after'" :handler="() => 'Hello'"  />
      </div>
      <CardList :card-type="'brand'" :column="6" :items="items" />
    </ContentBlock>
    <ContentBlock>
      <BrandNavigationList :items="[
'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'ASB-Woodline', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]" />
    </ContentBlock>
    <ContentBlock>
      <CatalogNavigationList />
    </ContentBlock>
  </main>
</template>
