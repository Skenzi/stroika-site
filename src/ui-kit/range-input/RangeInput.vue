<script setup lang="ts">
import { ref } from 'vue'
let movementElement: HTMLElement | null = null;
const props = defineProps<{
    start: number,
    end: number,
    step: number
}>()
const startValue = ref(props.start);
const endValue = ref(props.end);
const fullInterval = props.end - props.start;
const html = document.querySelector('html');
const inputStart = ref()
const inputEnd = ref()
const endPoint = ref()
const startPoint = ref()
const rangeFill = ref()

const getNewValue = (value: number, vektor: number) => value + (props.step * vektor);

const handlerStartPoint = (vektor: number) => {
    if (!movementElement) return
    let newValue = getNewValue(startValue.value, vektor);
    if(newValue > endValue.value) return 
    if (newValue < props.start) newValue = props.start
    if (newValue > props.end) newValue = props.end
    const newPosition = ((newValue - props.start) / fullInterval * 100) + '%'
    movementElement.style.left = newPosition
    rangeFill.value.style.left = newPosition
    startValue.value = newValue
}

const handlerEndPoint = (vektor: number) => {
    if (!movementElement) return
    let newValue = getNewValue(endValue.value, vektor);
    if(newValue < startValue.value) return
    if (newValue < props.start) newValue = props.start
    if (newValue > props.end) newValue = props.end
    const newPosition = ((props.end - newValue) / fullInterval * 100) + '%'
    movementElement.style.right = newPosition
    rangeFill.value.style.right = newPosition
    endValue.value = newValue
}

const movePoint = (ev: MouseEvent) => {
    if (movementElement) {
        const typePoint = movementElement.dataset.point;
        const vektor = ev.movementX < 0 ? -1 : 1;
        if (typePoint === 'start') {
            handlerStartPoint(vektor)
        }
        if (typePoint === 'end') {
            handlerEndPoint(vektor)
        }
    }
}
const movedPoint = (ev: Event) => {
    const target = ev.target as HTMLInputElement
    if (Number.isNaN(+target.value)) {
        target.value = ev.target === inputStart.value ? String(startValue.value) : String(endValue.value)
        return
    };
    if (ev.target === inputStart.value) {
        startValue.value = +target.value;
        if (startValue.value < props.start) startValue.value = props.start
        if (startValue.value > props.end) startValue.value = props.end

        const newPositionPoint = ((startValue.value - props.start) / fullInterval * 100) + '%';
        startPoint.value.style.left = newPositionPoint;
        rangeFill.value.style.left = newPositionPoint
    } else {
        endValue.value = +target.value;
        if (endValue.value > props.end) endValue.value = props.end
        if (endValue.value < props.start) endValue.value = props.start

        const newPositionPoint = ((props.end - endValue.value) / fullInterval * 100) + '%';
        endPoint.value.style.right = newPositionPoint;
        rangeFill.value.style.right = newPositionPoint
    }
}
const clearHandlerMove = () => {
    document.removeEventListener('mousemove', movePoint)
    if (html) html.style.userSelect = 'initial'
}
const startMovePoint = (ev: MouseEvent) => {
    movementElement = ev.target as HTMLElement;
    document.addEventListener('mouseup', clearHandlerMove)
    document.addEventListener('mousemove', movePoint)
    if (html) html.style.userSelect = 'none'
}
const keydownHandler = (ev: KeyboardEvent) => {
    const key = ev.key
    if(key === 'Tab') return
    ev.preventDefault()
    ev.stopPropagation()
    movementElement = ev.target as HTMLElement
    const typePoint = movementElement.dataset.point;
    switch (key) {
        case 'ArrowRight':
        case 'ArrowUp':
            typePoint === 'start' ? handlerStartPoint(1) : handlerEndPoint(1);
            break
        case 'ArrowLeft':
        case 'ArrowDown':
            typePoint === 'start' ? handlerStartPoint(-1) : handlerEndPoint(-1);
            break;
        case 'End':
            startValue.value = props.start
            break;
        case 'Home':
            endValue.value = props.end
            break;
    }
}
</script>


<template>
    <div>
        <div class="d-flex gap-12">
            <input class="input" :value="startValue" ref="inputStart" @change="movedPoint" />
            <input class="input" :value="endValue" ref="inputEnd" @change="movedPoint" />
        </div>
        <div class="range m-t-12" role="slider" :aria-valuemin="startValue"
            :aria-valuemax="endValue">
            <div @mousedown="startMovePoint" @mouseup="clearHandlerMove" tabindex="0" @keydown="keydownHandler" data-point="start" ref="startPoint"
                class="range__point range__point--start"></div>
            <div class="range__fill" ref="rangeFill"></div>
            <div @mousedown="startMovePoint" @mouseup="clearHandlerMove" tabindex="0" @keydown="keydownHandler" data-point="end" ref="endPoint"
                class="range__point range__point--end"></div>
        </div>
    </div>
</template>

<style src="./RangeInput.css" scoped></style>