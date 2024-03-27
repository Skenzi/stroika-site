import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref([
    {
      name: "John",
      text: "Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽",
      avatarPath: "Avatars.svg",
      date: "2022-01-01",
    },
    {
      name: "Emma",
      text: "I'm doing great, thank you!",
      avatarPath: "Avatars.svg",
      date: "2022-01-02",
    },
    {
      name: "Michael",
      text: "Hey, what's up?",
      avatarPath: "Avatars.svg",
      date: "2022-01-03",
    },
    {
      name: "Sarah",
      text: "Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽",
      avatarPath:  "Avatars.svg",
      date: "2022-01-20",
    }
  ])
  function setProductToCart(item: string, count: number) {
  }
  function getProductCount(item: string) {
    
  }
  return { comments, setProductToCart, getProductCount }
})
