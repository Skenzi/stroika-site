<script lang="ts">
import { onMounted, ref } from 'vue';
import CommentCard from '../../components/card/CommentCard.vue';
const rootCarousel = ref();
const handler = (num: number) => {
    const carousel: HTMLElement | null = rootCarousel.value;
    if(!carousel) return;
    const carouselCoord = carousel.getBoundingClientRect();
    const items = carousel.children;
    const firstChild = carousel.firstElementChild;
    const lastChild = carousel.lastElementChild;
    return () => {
        for(const item of items) {
            if(!firstChild || !lastChild) return;
            let steps = 300;
            const el = item as HTMLElement;
            let timer = setInterval(() => {
                console.log(1111)
                const firstChildCoord = firstChild.getBoundingClientRect();
                const lastChildCoord = lastChild.getBoundingClientRect();
                if((firstChildCoord.x === carouselCoord.x) && (num === 1)) {
                    steps = 200;
                    clearInterval(timer)
                    return;
                };
                if((lastChildCoord.x === carouselCoord.x) && (num === -1)) {
                    steps = 200;
                    clearInterval(timer)
                    return;
                };
                if(steps === 0) {
                    steps = 200;
                    clearInterval(timer)
                    return;
                }
                const prevLeftPosValue = +el.style.left.slice(0, el.style.left.length - 2);
                el.style.left = String(prevLeftPosValue + num) + 'px';
                steps -= 1;
            }, 2)
        }
    }
}
export default {
    props: {
        toLeftId: { type: String, required: true },
        toRightId: { type: String, required: true },
        items: { type: Object, required: true }
    },
    setup(props) {
        onMounted(() => {
            document.getElementById(props.toLeftId)?.addEventListener('click', ()=>handler(-1))
            document.getElementById(props.toRightId)?.addEventListener('click', ()=>handler(1))
        })
        return {
            rootCarousel
        }
    },
    components: {
        CommentCard
    }

}
</script>

<template>
    <div class="carousel" ref="rootCarousel">
        <CommentCard v-for="item in items" :key="item.date" :avatar="item.avatarPath" :date="item.date" :name="item.name" :text="item.text" />
    </div>
</template>

<style scoped>
.carousel {
    display: flex;
    gap: 16px;
}
</style>