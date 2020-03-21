new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alertado!!");
        },
        armazenarValor(e) {
            this.valor = e.target.value;
        }
    }
})