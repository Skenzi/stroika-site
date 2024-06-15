import { ref } from 'vue'
import { defineStore } from 'pinia'
type ProductProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  subcategory: string;
  imagePath: string;
}
interface ProductCountProps {
  [key: string]: number
}
export const useCartStore = defineStore('cart', () => {
  const cart = ref<ProductProps[]>([])
  const productsCount = ref<ProductCountProps>({})
  function addProduct(item: ProductProps) {
    productsCount.value[item.id] = 1;
    cart.value.push(item)
  }
  function removeProduct(id: string) {
    cart.value = cart.value.filter(product => id !== product.id)
    productsCount.value[id] = 0;
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
  return { setProductCount, getProductCount, addProduct, getProducts, removeProduct, cart, productsCount }
})
