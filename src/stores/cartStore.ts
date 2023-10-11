import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('modal', () => {
  const cart = ref({})
  function setProductToCart(item: string, count: number) {
    if(!cart.value[item]) {
        cart.value[item] = 1;
    } else {
        cart.value[item] += count;
    }
    if(cart.value[item] < 0) cart.value[item] = 0;
    if(cart.value[item] > 99) cart.value[item] = 99;
  }
  function getProductCount(item: string) {
    return cart.value[item];
  }
  return { cart, setProductToCart, getProductCount }
})
