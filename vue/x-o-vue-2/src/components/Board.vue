<template>
  <div class="board">
    <span id="board-score">Whose Turn: {{ user ? "X" : "O" }}</span>
    <div class="row" v-for="(row, index) in board" :key="index">
      <div class="tile" v-for="(tile, val) in row" :key="val">
        <Tile
          @click="pressed({ row: index, key: val, tile: tile })"
          :value="tile"
        ></Tile>
      </div>
    </div>
    <br />
    {{ opponents }}
  </div>
</template>

<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "Board",
  components: {
    Tile,
  },
  data() {
    return {
      game: [
        [
          [null, false],
          [null, false],
          [null, false],
        ],
        [
          [null, false],
          [null, false],
          [null, false],
        ],
        [
          [null, false],
          [null, false],
          [null, false],
        ],
      ],
      matched: [],
      whoseTurn: false,
      win: false,
      draw: false,
      opponents: {
        x: 0,
        o: 0,
      },
      cross: require("../assets/cross.svg"),
      circle: require("../assets/circle.svg"),
    };
  },
  computed: {
    board: {
      get() {
        return this.game;
      },
    },
    user() {
      return this.whoseTurn;
    },
  },
  methods: {
    turnUser() {
      this.whoseTurn = !this.whoseTurn;
    },
    pressed(val) {
      if (val.tile[0] === null) {
        this.board[val.row][val.key] = [this.user ? 1 : 2, false];
        this.win = this.checkCol() || this.checkRow() || this.checkDiagonal();
        this.draw = this.gameDraw();
        this.turnUser();
      }
    },
    checkRow() {
      for (let x = 0; x <= 2; x++) {
        if (
          this.board[x][0][0] === this.board[x][1][0] &&
          this.board[x][1][0] === this.board[x][2][0] &&
          this.board[x][0][0] !== null
        ) {
          this.matched.push([x, 0, this.board[x][0][0], true]);
          this.matched.push([x, 1, this.board[x][0][0], true]);
          this.matched.push([x, 2, this.board[x][0][0], true]);
          return true;
        }
      }
      return false;
    },
    checkCol() {
      for (let y = 0; y <= 2; y++) {
        if (
          this.board[0][y][0] === this.board[1][y][0] &&
          this.board[1][y][0] === this.board[2][y][0] &&
          this.board[0][y][0] !== null
        ) {
          this.matched.push([0, y, this.board[0][y][0], true]);
          this.matched.push([1, y, this.board[0][y][0], true]);
          this.matched.push([2, y, this.board[0][y][0], true]);
          return true;
        }
      }
      return false;
    },
    checkDiagonal() {
      if (
        this.board[0][0][0] === this.board[1][1][0] &&
        this.board[1][1][0] === this.board[2][2][0] &&
        this.board[0][0][0] !== null
      ) {
        this.matched.push([0, 0, this.board[0][0][0], true]);
        this.matched.push([1, 1, this.board[0][0][0], true]);
        this.matched.push([2, 2, this.board[0][0][0], true]);
        return true;
      } else if (
        this.board[0][2][0] === this.board[1][1][0] &&
        this.board[1][1][0] === this.board[2][0][0] &&
        this.board[1][1][0] !== null
      ) {
        this.matched.push([0, 2, this.board[1][1][0], true]);
        this.matched.push([1, 1, this.board[1][1][0], true]);
        this.matched.push([2, 0, this.board[1][1][0], true]);
        return true;
      }
      return false;
    },
    boardFilled() {
      return this.board.every((row) => row.every((col) => col[0] !== null));
    },
    gameDraw() {
      if (!this.win && this.boardFilled()) return true;
      return false;
    },
    clearBoard() {
      for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          this.board[row][col] = [null, false];
        }
      }
    },
    userWinned() {
      for (let key = 0; key <= this.matched.length; key++) {
        this.board[this.matched[key][0]][this.matched[key][1]] = [
          this.matched[key][2],
          this.matched[key][3],
        ];
      }
    },
    resetGame() {
      setTimeout(() => {
        this.matched.splice(0, this.matched.length);
        this.turnUser();
        this.win = false;
        this.draw = false;
        this.clearBoard();
      }, 3000);
    },
  },
  watch: {
    win(state) {
      if (state) this.resetGame();
      if (state) this.userWinned();
    },
    draw(state) {
      if (state === true) this.resetGame();
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  height: 180px;
  width: 180px;

  .row {
    background-color: red;
    display: flex;
    height: 60px;
  }

  .tile {
    background-color: rgb(255, 239, 254);
    border: 1px solid black;
    width: 60px;
  }
}
</style>
