import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({})
  function setProductToCart(item: string, count: number) {
    if(!cart.value.hasOwnProperty(item)) {
        cart.value[item] = 0;
    }
    cart.value[item] += count;
    if(cart.value[item] < 0) cart.value[item] = 0;
    if(cart.value[item] > 99) cart.value[item] = 99;
  }
  function getProductCount(item: string) {
    if(!cart.value[item]) {
      cart.value[item] = 0;
  }
  return cart.value[item];
  }
  return { cart, setProductToCart, getProductCount }
})
