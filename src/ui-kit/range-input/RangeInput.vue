<script lang="ts">
import { defineComponent, ref } from 'vue'
let movementElement: HTMLElement | null = null;

export default defineComponent({
    setup(props) {
        let startValue = ref(props.start);
        let endValue = ref(props.end);
        const allProz = props.end - props.start;
        const proz = (allProz) / (props.step * 100);
        return { proz, allProz, startValue, endValue }
    },
    props: ['start', 'end', 'step'],
    methods: {
        movePoint(ev) {
            if (movementElement) {
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
                    const newValue = ev.movementX > 0 ? this.proz : this.proz * -1
                    if((valueLeft + newValue < 0)) return;
                    if((+this.$refs.inputStart.value === +this.$refs.inputEnd.value) && ev.movementX >= 0) return
                    movementElement.style.left = valueLeft + newValue + '%'
                    this.$refs.inputStart.value = Math.round(this.allProz * ((valueLeft + newValue) / 100))
                    this.$refs.rangeFill.style.left = movementElement.style.left
                }
                if (typePoint === 'end') {
                    const newValue = ev.movementX > 0 ? this.proz * -1 : this.proz
                    if((valueRight + newValue < 0)) return;
                    if((+this.$refs.inputStart.value === +this.$refs.inputEnd.value) && ev.movementX <= 0) return
                    movementElement.style.right = valueRight + newValue + '%'
                    this.$refs.inputEnd.value = Math.round(this.allProz * (1 - ((valueRight + newValue) / 100)))
                    this.$refs.rangeFill.style.right = movementElement.style.right
                }
            }
        },
        movedPoint(ev) {
            if(Number.isNaN(+ev.target.value)) {
                ev.target.value = ev.target === this.$refs.inputStart ? this.startValue : this.endValue
                return
            };
            if(ev.target === this.$refs.inputStart) {
                this.startValue = +ev.target.value;
                if (+ev.target.value > this.$refs.inputEnd.value) {
                    this.startValue = this.$refs.inputEnd.value
                };
                const newPositionPoint = this.startValue / (this.allProz / 100);
                this.$refs.startPoint.style.left = newPositionPoint + '%';
                this.$refs.rangeFill.style.left = newPositionPoint + '%'
            } else {
                this.endValue = +ev.target.value;
                if(+ev.target.value > this.allProz) {
                    this.endValue = this.allProz
                }
                if (+ev.target.value < this.$refs.inputStart.value) {
                    this.endValue = this.$refs.inputStart.value
                };
                const newPositionPoint = 100 - this.endValue / (this.allProz / 100);
                this.$refs.endPoint.style.right = newPositionPoint + '%';
                this.$refs.rangeFill.style.right = newPositionPoint + '%'
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
        <div>
            <input :value="startValue" ref="inputStart" @input="movedPoint" />
            <input :value="endValue" ref="inputEnd" @input="movedPoint" />
        </div>
        <div class="range">
            <div @mousedown="startMovePoint" @mouseup="clearHandlerMove" data-point="start" ref="startPoint"
                class="range__point range__point--start"></div>
            <div class="range__fill" ref="rangeFill"></div>
            <div @mousedown="startMovePoint" @mouseup="clearHandlerMove" data-point="end" ref="endPoint"
                class="range__point range__point--end"></div>
        </div>
    </div>
</template>

<style scoped>
.range {
    position: relative;
    width: 50%;
    margin-left: 100px;
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