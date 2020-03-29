<template>
  <div class="contador">
      <span>{{contador}}</span>
      <button @click="adicionar">+</button>
      <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++;
        },
        subtrair() {
            this.contador--;
        }
    }
}
</script>

<style scoped>
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    button {
        background-color: coral;
        border: none;
        border-radius: 15px;
        color: #fff;
        height: 30px;
        margin: 5px;
        outline: none;
        width: 30px;
    }
</style>
