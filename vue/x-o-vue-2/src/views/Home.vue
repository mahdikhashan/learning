<template>
  <div class="home">
    <board></board>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  name: 'Home',
  components: {
    Board,
  }
}
</script>
