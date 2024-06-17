<template>
  <div @click="$emit('click')">
    <span v-if="type === 0"></span>
    <span v-if="type === 1" :class=" animated ? 'blink' : '' "><img :src="cross" style="width:35px;height:35px;"/></span>
    <span v-if="type === 2" :class=" animated ? 'blink' : '' "><img :src="circle" style="width:35px;height:35px;"/></span>
  </div>
</template>

<script>
export default {
  name: "tile",
  props: {
    value: []
  },
  data() {
    return {
      cross: require('../assets/cross.svg'),
      circle: require('../assets/circle.svg'),
    }
  },
  computed: {
    animated() {
      return this.value[1]
    },
    type() {
      return this.value[0]
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;

  &:hover {
    background-color: rgb(215, 215, 255);
  }
}

.blink {
  animation: blinker 0.3s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
