<script lang="ts" setup>
import Form from '../../../components/form/FormView.vue';
import Button from '../../../ui-kit/buttons/AppButton.vue';
import { useModalStore } from '../../../stores/modal';
const modalStore = useModalStore();
</script>

<template>
        <div class="modal">
            <h2 class="modal__header">Вход</h2>
            <Form>
                <div class="form-group m-t-24">
                    <label for="email" class="form-label">E-mail</label>
                    <input id="email" class="form-element input" placeholder="youmail@mail.com" />
                </div>
                <div class="form-group m-t-24">
                    <label for="password" class="form-label">Пароль</label>
                    <input id="password" class="form-element input" placeholder="youmail@mail.com" />
                </div>
                <a href="#" class="m-t-12 form-link">
                    Забыли пароль?
                </a>
                <Button :handler="()=>{}" class="bg-main m-t-24 w-full">
                    Войти
                </Button>
                <Button type="button" class="m-t-12 button--border w-full" :handler="modalStore.changeModalType('registration')">
                    Создать учетную запись
                </Button>
            </Form>
        </div>
</template>

<style scoped>
.modal {
    max-width: 376px;
}
.form-link {
    display: block;
    color: #5D6066;
    font-size: 15px;
    font-weight: 500;
    line-height: 145%;
    text-align: left;
}
</style>