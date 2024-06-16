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

        const movePoint = (ev: MouseEvent) => {
            if (movementElement) {
                const typePoint = movementElement.dataset.point;
                const vektor = ev.movementX < 0 ? -1 : 1;
                if (typePoint === 'start') {
                    let newValue = startValue.value + (props.step * vektor);
                    if(newValue < props.start) newValue = props.start
                    if(newValue > props.end) newValue = props.end
                    const newPosition = ((newValue - props.start) / fullInterval * 100) +'%'
                    movementElement.style.left = newPosition
                    rangeFill.value.style.left = newPosition
                    startValue.value = newValue
                }
                if (typePoint === 'end') {
                    let newValue = endValue.value + (props.step * vektor);
                    if(newValue < props.start) newValue = props.start
                    if(newValue > props.end) newValue = props.end
                    const newPosition = ((props.end - newValue) / fullInterval * 100) +'%'
                    movementElement.style.right = newPosition
                    rangeFill.value.style.right = newPosition
                    endValue.value = newValue
                }
            }
        }
        const movedPoint = (ev: Event) => {
            const target = ev.target as HTMLInputElement
            if(Number.isNaN(+target.value)) {
                target.value = ev.target === inputStart.value ? String(startValue.value) : String(endValue.value)
                return
            };
            if(ev.target === inputStart.value) {
                startValue.value = +target.value;
                if (startValue.value < props.start) startValue.value = props.start
                if (startValue.value > props.end) startValue.value = props.end
                
                const newPositionPoint = ((startValue.value - props.start) / fullInterval * 100) +'%';
                startPoint.value.style.left = newPositionPoint;
                rangeFill.value.style.left = newPositionPoint
            } else {
                endValue.value = +target.value;
                if(endValue.value > props.end) endValue.value = props.end
                if (endValue.value < props.start) endValue.value = props.start

                const newPositionPoint = ((props.end - endValue.value) / fullInterval * 100) +'%';
                endPoint.value.style.right = newPositionPoint;
                rangeFill.value.style.right = newPositionPoint
            }
        }
        const clearHandlerMove=()=> {
            document.removeEventListener('mousemove', movePoint)
            if(html) html.style.userSelect = 'initial'
        }
        const startMovePoint=(ev: MouseEvent)=> {
            movementElement = ev.target as HTMLElement;
            document.addEventListener('mouseup', clearHandlerMove)
            document.addEventListener('mousemove', movePoint)
            if(html) html.style.userSelect = 'none'
        }
</script>


<template>
    <div>
        <div class="d-flex gap-12">
            <input class="input" :value="startValue" ref="inputStart" @change="movedPoint" />
            <input class="input" :value="endValue" ref="inputEnd" @change="movedPoint" />
        </div>
        <div class="range m-t-12">
            <div @mousedown="startMovePoint" @mouseup="clearHandlerMove" data-point="start" ref="startPoint"
                class="range__point range__point--start"></div>
            <div class="range__fill" ref="rangeFill"></div>
            <div @mousedown="startMovePoint" @mouseup="clearHandlerMove" data-point="end" ref="endPoint"
                class="range__point range__point--end"></div>
        </div>
    </div>
</template>

<style scoped>
.gap-12 {
    gap: 12px;
}
.m-t-12 {
    margin-top: 12px;
}
.range {
    position: relative;
    width: 100%;
    height: 8px;
    background-color: #E8E9EA;
}

.range__point {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 6px 7px;
    transform: translateY(-25%);
    background-color: var(--white);
    border: 1px solid #5D6066;
    cursor: pointer;
    z-index: 9999;
}

.range__fill {
    position: absolute;
    left: 0;
    right: 0;
    height: 8px;
    background-color: #8B8D92;
}

.range__point::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 8px;
    background-color: #5D6066;
}

.range__point::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 8px;
    margin-left: 4px;
    background-color: #5D6066;
}

.range__point--start {
    left: 0;
    transform: translate(-50%, -25%);
}

.range__point--end {
    right: 0;
    transform: translate(50%, -25%);
}</style>