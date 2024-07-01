<script lang="ts" setup>
import ButtonWithIcon from "../../ui-kit/buttons/AppButtonWithIcon.vue";
import Button from "../../ui-kit/buttons/AppButton.vue";
import { ref, computed } from "vue";

const slides = [
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Специальные предложения',
        text: 'на строительные материалы и товары для ремонта',
        handler: () => ''
    },
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Hello1',
        text: 'World!',
        handler: () => ''
    },
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Hello2',
        text: 'World!',
        handler: () => ''
    },
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Hello3',
        text: 'World!',
        handler: () => ''
    },
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Hello',
        text: 'World!',
        handler: () => ''
    },
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Hello',
        text: 'World!',
        handler: () => ''
    },
    {
        image: '/src/assets/images/sliderBg.png',
        header: 'Hello',
        text: 'World!',
        handler: () => ''
    }
]
const currSlideIndex = ref(0);
const increment = () => {
    currSlideIndex.value += 1;
    if(currSlideIndex.value > slides.length - 1) currSlideIndex.value = 0;
}
const decrement = () => {
    currSlideIndex.value -= 1;
    if(currSlideIndex.value < 0) currSlideIndex.value = slides.length - 1;;
}
const slide = computed(() => slides[currSlideIndex.value])
</script>

<template>
    <div class="slider m-40-40-0-40">
        <section class="slide" :style="`background-image: url(${slide.image})`">
            <div class="slide__content">
                <h1 class="slide__header">{{ slide.header }}</h1>
                <p class="slide__text">
                    {{ slide.text }}
                </p>
            </div>
            <div class="slide__actions">
                <Button class="bg-main" :handler="slide.handler">Подробнее</Button>
                <div class="group-controls">
                    <ButtonWithIcon class="button--border" :icon="'arrowL'" :handler="decrement" />
                    <ButtonWithIcon class="button--border" :icon="'arrowR'" :handler="increment" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.slider {
    height: 420px;
}

.slide {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px 100px;
    background-size: cover;
    background-repeat: no-repeat;
}
.slide__button svg {
    height: 24px;
}
.slide__content {
    max-width: 350px;
}
.slide__header {
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 20px;
}
.slide__text {
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
}
.slide__actions {
    display: flex;
    margin-top: 96px;
    justify-content: space-between;
}
.slide__actions .slide__button:first-child {
    margin-right: 12px;
}
</style>