<script lang="ts" setup>
import Form from '../../../components/form/FormView.vue';
import Button from '../../../ui-kit/buttons/AppButton.vue';

</script>

<template>
        <div class="modal">
            <h2 class="modal__header">Регистрация</h2>
            <Form>
                <div class="form-row m-t-24">
                    <div class="form-group">
                        <label for="username" class="form-label">Имя</label>
                        <input id="username" class="form-element input" placeholder="Bogdan" />
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">E-mail</label>
                        <input id="email" type="email" class="form-element input" placeholder="youmail@mail.com" />
                    </div>
                </div>
                <div class="form-row m-t-24">
                    <div class="form-group">
                        <label for="password" class="form-label">Пароль</label>
                        <input id="password" type="password" class="form-element input" placeholder="youmail@mail.com" />
                    </div>
                    <div class="form-group">
                        <label for="password-repeat" class="form-label">Подтверждение пароля</label>
                        <input id="password-repeat" type="password" class="form-element input" placeholder="youmail@mail.com" />
                    </div>
                </div>
                <Button :handler="()=>{}" class="bg-main m-t-24">
                    Зарегистрироваться
                </Button>
            </Form>
        </div>
</template>