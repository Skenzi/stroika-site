<script lang="ts" setup>
import { ref } from 'vue';
import CommentCard from '../../components/card/CommentCard.vue';
import ButtonWithIcon from '@/ui-kit/buttons/ButtonWithIcon.vue';
const rootCarousel = ref();
const handler = (num: number) => {
    const carousel: HTMLElement = rootCarousel.value;
    if (!carousel) return;
    const totalComments = carousel.children.length
    const firstChild = carousel.firstElementChild;
    const step = firstChild?.clientWidth || 200
    const leftValue = +carousel.style.left.slice(0, -2)
    const totalWidth = step * (totalComments - 1)
    let newValue = leftValue + (step * num)
    if (newValue < -totalWidth || newValue > 0) return
    carousel.style.left = newValue + 'px'
}
    defineProps<{
        items: {
            date: string,
            avatarPath: string,
            name: string,
            text: string
        }[]
    }>()


</script>

<template>
    <div>
        <div class="d-flex justify-between align-center m-b-18">
            <h2>Отзывы</h2>
            <div class="group-controls">
                <ButtonWithIcon @click="handler(-1)" class="button-icon button--border" :icon="'chevronL'" id="toLeftCarousel"
                    :handler="() => { }" />
                <ButtonWithIcon @click="handler(1)" class="button-icon button--border" :icon="'chevronR'" id="toRightCarousel"
                    :handler="() => { }" />
            </div>
        </div>
        <div class="carousel" ref="rootCarousel">
            <CommentCard v-for="item in items" :key="item.date" :avatar="item.avatarPath" :date="item.date"
                :name="item.name" :text="item.text" />
        </div>
    </div>
</template>

<style scoped>
.carousel {
    display: flex;
    position: relative;
    left: 0px;
    gap: 16px;
}
</style>