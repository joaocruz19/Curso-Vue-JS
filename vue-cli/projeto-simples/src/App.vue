<template>
  <div id="app">
    {{ titulo }}
  <button @click="titulo += '#'">Mudar</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: "Teste Data usando Vue Js"
    }
  }
}
</script>

<style>
  #app {
  background-color: purple;    
}
</style>
