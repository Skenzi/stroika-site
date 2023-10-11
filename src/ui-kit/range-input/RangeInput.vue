<script lang="ts">
import { defineComponent, ref } from 'vue'
let movementElement: HTMLElement | null = null;

export default defineComponent({
    setup(props) {
        let startValue = ref(props.start);
        let endValue = ref(props.end);
        const fullRange = props.end - props.start;
        const percent = +((props.step * 100) / (fullRange)).toFixed(2);
        return { percent, fullRange, startValue, endValue }
    },
    props: ['start', 'end', 'step'],
    methods: {
        movePoint(ev) {
            if (movementElement) {
                const vektorStart = ev.movementX > 0 ? 1 : -1;
                const vektorEnd = ev.movementX < 0 ? 1 : -1;
                const typePoint = movementElement.dataset.point;
                const valueLeft = +movementElement.style.left.slice(0, movementElement.style.left.length - 1);
                const valueRight = +movementElement.style.right.slice(0, movementElement.style.right.length - 1);
                if (valueLeft < 0 && typePoint === 'start') {
                    movementElement.style.left = 0 + '%'
                    return
                }
                if (valueRight < 0 && typePoint === 'end') {
                    movementElement.style.right = 0 + '%'
                    return;
                }
                if (typePoint === 'start') {
                    const newPositionValue = ev.movementX * this.percent
                    if((valueLeft + newPositionValue < 0) || (valueLeft + newPositionValue > 100)) return;
                    if((+this.$refs.inputStart.value === +this.$refs.inputEnd.value) && ev.movementX >= 0) return
                    movementElement.style.left = valueLeft + newPositionValue + '%'
                    this.$refs.inputStart.value = Math.round(this.$props.end * ((valueLeft + newPositionValue) / 100)) < this.startValue ? this.startValue : Math.round(this.fullRange * ((valueLeft + newPositionValue) / 100))
                    this.$refs.rangeFill.style.left = movementElement.style.left
                }
                if (typePoint === 'end') {
                    const newPositionValue = ev.movementX * -1 * this.percent
                    if((valueRight + newPositionValue < 0) || (valueRight + newPositionValue > 100)) return;
                    if((+this.$refs.inputStart.value === +this.$refs.inputEnd.value) && ev.movementX <= 0) return
                    movementElement.style.right = valueRight + newPositionValue + '%'
                    this.$refs.inputEnd.value = Math.round(this.$props.end * (1 - ((valueRight + newPositionValue) / 100)))
                    this.$refs.rangeFill.style.right = movementElement.style.right
                }
                /*if (valueLeft < 0 && typePoint === 'start') {
                    movementElement.style.left = 0 + '%'
                    return
                }
                if (valueRight < 0 && typePoint === 'end') {
                    movementElement.style.right = 0 + '%'
                    return;
                }
                if (typePoint === 'start') {
                    const newValue = ev.movementX > 0 ? this.percent : this.percent * -1
                    if((valueLeft + newValue < 0)) return;
                    if((+this.$refs.inputStart.value === +this.$refs.inputEnd.value) && ev.movementX >= 0) return
                    movementElement.style.left = valueLeft + newValue + '%'
                    this.$refs.inputStart.value = +this.$refs.inputStart.value + (ev.movementX > 0 ? this.step : this.step * -1) //Math.round(this.$props.end * ((valueLeft + newValue) / 100)) < this.startValue ? this.startValue : Math.round(this.fullRange * ((valueLeft + newValue) / 100))
                    this.$refs.rangeFill.style.left = movementElement.style.left
                }
                if (typePoint === 'end') {
                    const newValue = ev.movementX > 0 ? this.percent * -1 : this.percent
                    if((valueRight + newValue < 0)) return;
                    if((+this.$refs.inputStart.value === +this.$refs.inputEnd.value) && ev.movementX <= 0) return
                    movementElement.style.right = valueRight + newValue + '%'
                    this.$refs.inputEnd.value = +this.$refs.inputEnd.value + (ev.movementX > 0 ? this.step : this.step * -1) //Math.round(this.$props.end * (1 - ((valueRight + newValue) / 100)))
                    this.$refs.rangeFill.style.right = movementElement.style.right
                }*/
            }
        },
        movedPoint(ev) {
            if(Number.isNaN(+ev.target.value)) {
                ev.target.value = ev.target === this.$refs.inputStart ? this.startValue : this.endValue
                return
            };
            if(ev.target === this.$refs.inputStart) {
                this.startValue = +ev.target.value;
                if (this.startValue < this.$props.start) {
                    this.startValue = this.$props.start
                };
                if (this.startValue > this.$refs.inputEnd.value) {
                    this.startValue = this.$refs.inputEnd.value
                };
                const newPositionPoint = this.startValue === this.$props.start ? 0 : this.startValue / (this.fullRange / 100);
                this.$refs.startPoint.style.left = newPositionPoint + 'px';
                this.$refs.rangeFill.style.left = newPositionPoint + 'px'
            } else {
                this.endValue = +ev.target.value;
                if(this.endValue > this.$props.end) {
                    this.endValue = this.$props.end
                }
                if (this.endValue < this.$refs.inputStart.value) {
                    this.endValue = this.$refs.inputStart.value
                };
                const newPositionPoint = this.endValue === this.$props.end ? 0 : 100 - this.endValue / (this.fullRange / 100);
                this.$refs.endPoint.style.right = newPositionPoint + 'px';
                this.$refs.rangeFill.style.right = newPositionPoint + 'px'
            }
        },
        clearHandlerMove() {
            document.removeEventListener('mousemove', this.movePoint)
            document.querySelector('html').style.userSelect = 'initial'
        },
        startMovePoint(ev) {
            movementElement = ev.target;
            const html = document.querySelector('html');
            document.addEventListener('mouseup', this.clearHandlerMove)
            document.addEventListener('mousemove', this.movePoint)
            html.style.userSelect = 'none'
        }
    }
})
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