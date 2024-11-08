<template>
  <h1>Hola muchachos</h1>
  <p>{{ contador }}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="disminuir">Disminuir</button>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0)
const incrementar = () => {
  contador.value++
}
const disminuir = () => {
  contador.value--
}
</script>

<style scoped>
p {
  color: red;
  margin-top: 10px;
  font-size: 20px;
}

h1 {
  margin-bottom: 20px;
}

button {
  background: rgb(4, 75, 45);
  color: white;
  border: 2px;
  border-radius: 5px;
  font: Montserrat;
  margin-right: 4px;
}
</style>

button {
  backgorund
}
