<script lang="ts" setup>
import Form from '../components/form/FormView.vue'
import Button from '../ui-kit/buttons/Button.vue';
</script>

<template>
  <main>
    <section class="profile-wrapper">
        <h1>Личный кабинет</h1>
        <div class="profile-form">
            <h2>Личная информация</h2>
            <Form>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name" class="form-label">Имя</label>
                        <input class="form-element input" id="name" placeholder="Bogdan" />
                    </div>
                    <div class="form-group">
                        <label for="surname" class="form-label">Фамилия</label>
                        <input class="form-element input" id="surname" placeholder="Pornikin" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="birthday" class="form-label">Дата рождения</label>
                        <input class="form-element input" id="birthday" type="date" placeholder="24.05.1989" />
                    </div>
                    <div class="form-group">
                        <label for="phonenumber" class="form-label">Телефон</label>
                        <input class="form-element input" id="phonenumber" type="number" placeholder="+7 (359) 90-38-98" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="email" class="form-label">E-mail</label>
                        <input class="form-element input" id="email" type="email" placeholder="youmail@mail.com" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="password" class="form-label">Новый пароль</label>
                        <input class="form-element input" id="password" type="password" placeholder="youmail@mail.com" />
                    </div>
                    <div class="form-group">
                        <label for="password-repeat" class="form-label">Подтверждение пароля</label>
                        <input class="form-element input" id="password-repeat" type="password" placeholder="youmail@mail.com" />
                    </div>
                </div>
                <Button type="submit" @click="() => {console.log(123)}" class="bg-main m-t-24">
                    Сохранить
                </Button>
            </Form>
        </div>
    </section>
  </main>
</template>

<style scoped>
.profile-wrapper {
    padding: 40px 336px 80px 336px;
}
.profile-form {
    margin-top: 40px;
    padding: 36px;
    border: 1px solid #D1D1D3;
}
</style>