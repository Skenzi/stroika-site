<script lang="ts" setup>

</script>

<template>
    <div class="searchbox">
        <input placeholder="Поиск" class="input" />
        <button class="searchbox__button"></button>
    </div>
</template>

<style scoped>
  .searchbox {
    display: inline-block;
    max-width: 444px;
    flex: 1;
    position: relative;
  }
  .searchbox__button {
    background: url(/icons/lupa.svg);
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 16px;
  }

  .searchbox__input {
    display: inline-block;
    padding: 12px 16px;
    width: 100%;
    height: 100%;
  }
</style>