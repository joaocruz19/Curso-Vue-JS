new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor === 37 ? "Valor Igual" : "Valor Diferente";
        }
    },
    watch: {
        resultado() {
            if (this.valor === 37) {
                setTimeout(() => {
                    this.valor = 0;
                }, 5000);
            }
        }
    }
});