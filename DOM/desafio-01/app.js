new Vue({
    el: "#desafio",
    data: {
        name: "João",
        age: 19,
        imgLink: "https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"
    },
    methods: {
        changeName: function(e) {
            this.name = e.target.value;
        },
        changeAge: function(e) {
            this.age = e.target.value;
        }
    }
})