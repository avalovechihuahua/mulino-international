<template>
  <transition
    name="fade"
    :duration="1500"
  >
    <div
      v-if="!isFadeOut"
      class="container"
    >
      <div class="trigger"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      loading: 0,
      isFadeOut: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.closeLoading()
    }, 1500)
  },
  methods: {
    closeLoading () {
      setTimeout(() => {
        this.isFadeOut = true
        this.$store.commit('scrollLockDisable')
        this.$store.commit('loadingFinishAction')
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  z-index: 300;
  width: 100vw;
  height: 100vh;
  background-color: color(green);
}

.trigger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.trigger::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 20px;
  margin-top: -40px;
  margin-left: -5px;
  animation: trigger 1s infinite ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes trigger {
  0%,
  100% {
    -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
    box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
  }

  30% {
    -webkit-box-shadow: -30px 30px 0 5px #fff, -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
    box-shadow: -30px 30px 0 5px #fff, -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
  }

  40% {
    -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 5px #fff, 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
    box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 5px #fff, 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
  }

  50% {
    -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 5px #fff, 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
    box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 5px #fff, 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
  }

  60% {
    -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 5px #fff, 30px 30px 0 0 rgba(255, 255, 255, .5);
    box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 5px #fff, 30px 30px 0 0 rgba(255, 255, 255, .5);
  }

  70% {
    -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 5px #fff;
    box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 5px #fff;
  }

  80% {
    -webkit-box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
    box-shadow: -30px 30px 0 0 rgba(255, 255, 255, .5), -15px 30px 0 0 rgba(255, 255, 255, .5), 0 30px 0 0 rgba(255, 255, 255, .5), 15px 30px 0 0 rgba(255, 255, 255, .5), 30px 30px 0 0 rgba(255, 255, 255, .5);
  }
}
</style>
