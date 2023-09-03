<script lang="ts" setup>
defineProps({
    name: { type: String, required: true },
    text: { type: String, required: true },
    avatar: { type: String, required: true },
    date: { type: String, required: true }
})
</script>

<template>
    <div class="comment">
        <div class="comment__header">
            <img :src="avatar" />
            {{ name }}
        </div>
        <div class="comment__body">
            {{ text }}
        </div>
        <div class="comment__footer">
            {{ date }}
        </div>
    </div>
</template>

<style scoped>
.comment {
    flex: 1;
    min-width: 376px;
    max-height: 365px;
    padding: 24px;
    position: relative;
    background-color: var(--white);
}
.comment::after {
    content: '';
    width: 32px;
    height: 24px;
    position: absolute;
    top: 24px;
    right: 24px;
    background: url('/icons/CommentMetka.svg') no-repeat;
}
</style>