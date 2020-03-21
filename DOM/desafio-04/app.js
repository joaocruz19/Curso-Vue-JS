new Vue({
	el: '#desafio',
	data: {
		classeEfeito: "",
		classe3: '',
		classe4: '',
		perigo: false,
		cor5: "",
		estilo5: {
			height: "100px",
			width: "100px"
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeEfeito = this.classeEfeito === "destaque" ? "encolher" : "destaque";
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`;
				if(valor === 100) clearInterval(temporizador);
			}, 500)
		},
		setPerigo(e) {
			if(e.target.value === 'true') {
				this.perigo = true;
			} else if(e.target.value === 'false') {
				this.perigo = false;
			}
		}
	}
})
