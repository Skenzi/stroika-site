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
    width: 100%;
    flex: 1;
    position: relative;
  }
  .searchbox .input:focus, .searchbox .input:active {
    outline: none;
  }
  
  .searchbox__button {
    background: url(/src/assets/icons/lupa.svg);
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 16px;
  }
</style>