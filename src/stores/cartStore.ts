import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = new Set()
  const productsCount = ref({})
  function addProduct(item: Object) {
    productsCount.value[item.id] = 1;
    cart.add(item)
    console.log(cart.size, productsCount.value, item)
  }
  function removeProduct(item: Object) {
    cart.delete(item)
  }
  function setProductCount(item: string, count: number) {
    if(!productsCount.value.hasOwnProperty(item)) {
      productsCount.value[item] = 0;
    }
    productsCount.value[item] += count;
    if(productsCount.value[item] < 0) productsCount.value[item] = 0;
    if(productsCount.value[item] > 99) productsCount.value[item] = 99;
  }
  function getProductCount(item: string) {
    return productsCount.value[item];
  }
  return { setProductCount, getProductCount, addProduct }
})
