import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const productsCount = ref({})
  function addProduct(item: Object) {
    productsCount.value[item.id] = 1;
    cart.value.push(item)
  }
  function removeProduct(id: string) {
    console.log('delete', cart)
    cart.value = cart.value.filter(product => id !== product.id)
    productsCount.value[id] = 0;
    console.log('deleted', cart)
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
  function getProducts() {
    return cart;
  }
  return { setProductCount, getProductCount, addProduct, getProducts, removeProduct }
})
