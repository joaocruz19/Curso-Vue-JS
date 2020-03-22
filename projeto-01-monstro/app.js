new Vue({
  el: "#app",
  data: {
    running: false,
    specialAttacks: 4,
    heals: 4,
    playerLife: 100,
    monsterLife: 100,
    logs: []
  },
  computed: {
    isGameOver() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    startGame() {
      this.running = true;
      this.specialAttacks = 4;
      this.heals = 4;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    attack(special) {
      this.hurt("playerLife", 7, 12, false, "Jogador", "Monstro", "player");
      if (this.monsterLife > 0) {
        this.hurt(
          "monsterLife",
          5,
          10,
          special,
          "Monstro",
          "Jogador",
          "monster"
        );
      }
    },
    hurt(hurted, min, max, special, source, target, cls) {
      if (special) {
        this.specialAttacks = Math.max(this.specialAttacks - 1, 0);
      }
      const plus = special ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[hurted] = Math.max(this[hurted] - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
    },
    healAndHurt() {
      this.heals = Math.max(this.heals - 1, 0);
      this.heal(10, 15);
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Jogador ganhou força de ${heal}.`, "player");
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    }
  },
  watch: {
    isGameOver(value) {
      if (value) this.running = false;
    }
  }
});
