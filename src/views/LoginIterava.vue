<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Regístrate</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          v-model="register_form.email"
        />
        <input
          type="password"
          placeholder="Contrasena"
          v-model="register_form.password"
        />
        <input type="submit" value="Registrame!" />
      </form>
      <h2>Logueate</h2>
      <form class="login" @submit.prevent="login">
        <input
          type="email"
          placeholder="Correo electrónico"
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="Contrasena"
          v-model="login_form.password"
        />
        <input type="submit" value="Logueame!" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };
    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>

<style>
.forms {
  display: flex;
  min-height: 100vh;
}

form {
  flex: content;
  padding: 8rem 1rem 1rem;
}

form.register {
  color: #fff;
  background-color: rgb(19, 204, 250);
  background-image: linear-gradient(
    to bottom right,
    rgb(93, 93, 226) 0%,
    rgb(175, 38, 230) 100%
  );
}
h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}
form.login input:not([type="submit"]) {
  color: rgb(0, 0, 0);
  border-bottom: 2px solid rgba(30, 30, 31, 0.603);
}
form.login input[type="submit"] {
  background-color: rgb(93, 93, 226);
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding: 1rem 2 rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.register input[type="submit"] {
  background-color: rgb(255, 255, 255);
  color: rgb(93, 93, 226);
  font-weight: 700;
  padding: 1rem 2 rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
