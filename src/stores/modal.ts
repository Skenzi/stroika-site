import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const modalType = ref('login');
  const modalHeader = ref('Header');
  const modalText = ref('Text');
  function changeModalState() {
    isOpen.value = !isOpen.value
  }
  function changeModalType(type: string) {
    return () => {
        modalType.value = type;
    }
  }
  return { isOpen, changeModalState, modalType, changeModalType, modalHeader, modalText }
})
