<script lang="ts">
import { defineComponent, ref } from 'vue'
let movementElement: HTMLElement | null = null;

export default defineComponent({
    setup(props) {
        const startValue = ref(props.start);
        let endValue = ref(props.end);
        const fullInterval = props.end - props.start;
        return { fullInterval, startValue, endValue }
    },
    props: ['start', 'end', 'step'],
    methods: {
        movePoint(ev) {
            if (movementElement) {
                const typePoint = movementElement.dataset.point;
                const vektor = ev.movementX < 0 ? -1 : 1;
                if (typePoint === 'start') {
                    let newValue = this.startValue + (this.step * vektor);
                    if(newValue < this.start) newValue = this.start
                    if(newValue > this.end) newValue = this.end
                    const newPosition = ((newValue - this.start) / this.fullInterval * 100) +'%'
                    movementElement.style.left = newPosition
                    this.$refs.rangeFill.style.left = newPosition
                    this.startValue = newValue
                }
                if (typePoint === 'end') {
                    let newValue = this.endValue + (this.step * vektor);
                    if(newValue < this.start) newValue = this.start
                    if(newValue > this.end) newValue = this.end
                    const newPosition = ((this.end - newValue) / this.fullInterval * 100) +'%'
                    movementElement.style.right = newPosition
                    this.$refs.rangeFill.style.right = newPosition
                    this.endValue = newValue
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
                if (this.startValue < this.start) this.startValue = this.start
                if (this.startValue > this.end) this.startValue = this.end
                
                const newPositionPoint = ((this.startValue - this.start) / this.fullInterval * 100) +'%';
                this.$refs.startPoint.style.left = newPositionPoint;
                this.$refs.rangeFill.style.left = newPositionPoint
            } else {
                this.endValue = +ev.target.value;
                if(this.endValue > this.end) this.endValue = this.end
                if (this.endValue < this.start) this.endValue = this.start

                const newPositionPoint = ((this.end - this.endValue) / this.fullInterval * 100) +'%';
                this.$refs.endPoint.style.right = newPositionPoint;
                this.$refs.rangeFill.style.right = newPositionPoint
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