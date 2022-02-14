<template>
  <section
    class="container animate"
    :class="{ready: isReady}"
  >
    <div class="wrapper">
      <div
        v-animate="{ restart: true, enterFunc: ctaTrigger, leaveFunc: ctaTrigger }"
        class="trigger-cta-dummy"
      ></div>
      <div class="contents">
        <img
          class="sub-title"
          :src="titleImg"
          alt="一起打造美味吧!"
        >
        <h1
          class="main-title"
        >
          <img
            src="@/assets/img/hero/kv-tit-2@2x.png"
            alt="慕里諾餐飲集團聯合招募"
          >
        </h1>
        <img
          class="pizza"
          src="@/assets/img/hero/pizza@2x.png"
          alt="pizza"
        >
      </div>
      <div class="show-at-md">
        <img
          class="people"
          src="@/assets/img/hero/kv@2x.png"
          alt="人物"
        >
      </div>
    </div>
    <div
      class="call-to-action"
      :class="{active: showCTA}"
    >
      <a
        v-scroll-to="{
          el: '#job-list-section',
          offset: -230,
        }"
        href="#"
        class="cta-btn"
      >
        <img
          src="@/assets/img/call-to-action@2x.png"
          alt="立即應徵"
        >
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      vw: window.innerWidth,
      mbWidth: 768,
      showCTA: false
    }
  },
  computed: {
    isMobile () {
      if (this.vw <= this.mbWidth) {
        return true
      } else {
        return false
      }
    },
    isReady () {
      return !this.$store.state.loading.isShow
    },
    titleImg () {
      if (this.isMobile) {
        return require('@/assets/img/hero/kv-tit@2x_title_mb.png')
      } else {
        return require('@/assets/img/hero/kv-tit@2x.png')
      }
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
    })
  },
  methods: {
    ctaTrigger (el) {
      if (el.classList.contains('activated')) {
        this.showCTA = true
      } else {
        this.showCTA = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 20;
  width: 100%;
  height: 728px;
  margin-top: -64px;

  @media screen and (min-width: 1921px) {
    height: initial;
    margin-top: -4%;
    padding-bottom: to-vw-xxl(728);
  }

  @include screen(xl) {
    height: initial;
    margin-top: -4%;
    padding-bottom: to-vw-xxxl(728);
  }

  @include screen(md) {
    margin-top: calc(-30% - 50px);
    padding-bottom: to-vw-sm(570);
    transform: scale(1.15);
    transform-origin: center 57vw;
  }

  @media screen and (max-width: 630px) {
    margin-top: calc(-28% - 50px);
  }

  @media screen and (max-width: 535px) {
    margin-top: calc(-27% - 50px);
  }

  @include screen(sm2) {
    margin-top: calc(-24% - 50px);
  }

  @media screen and (max-width: 319px) {
    width: 320px;
    margin-top: -126.797px;
    padding-bottom: 506px;
    background-image: url('~@/assets/img/hero/kv-bg@2x_mb_1.png');
    background-size: auto 100%;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('~@/assets/img/hero/kv-img@2x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @include screen(md) {
    background-image: url('~@/assets/img/hero/kv-bg@2x_mb_1.png');
    background-size: auto 100%;
  }

  @media screen and (max-width: 319px) {
    background: none;
  }
}

.contents {
  position: absolute;
  top: 96px;
  left: 50%;
  width: 769px;
  height: 644px;
  background-image: url('~@/assets/img/hero/tit-bg@2x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: translateX(calc(-50% - 299px));

  @media screen and (min-width: 1921px) {
    top: to-vw-xxl(90);
    width: to-vw-xxl(769);
    height: to-vw-xxl(644);
    transform: translateX(calc(-50% - 19vw));
  }

  @include screen(xl) {
    top: 4vw;
    width: to-vw-xxxl(769);
    height: to-vw-xxxl(644);
    transform: translateX(calc(-50% - 18vw));
  }

  @include screen (md) {
    position: relative;
    top: 0;
    left: initial;
    width: 80%;
    height: 39%;
    margin: 41% auto 0;
    background: none;
    transform: initial;
  }

  @media screen and (max-width: 319px) {
    width: 256px;
    height: 197px;
    margin-top: 131.188px;
  }
}

.people {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  z-index: 3;
  width: 80%;
  margin: -38% auto 0;
  transform: translateX(-50%);

  @media screen and (max-width: 319px) {
    bottom: 7.59px;
    width: 256px;
    height: 235px;
    margin-top: -121px;
  }
}

.sub-title {
  position: absolute;
  top: 47px;
  left: 5px;
  width: 723px;

  @media screen and (min-width: 1921px) {
    top: to-vw-xxl(47);
    left: to-vw-xxl(5);
    width: to-vw-xxl(723);
  }

  @include screen(xl) {
    top: to-vw-xxxl(47);
    left: to-vw-xxxl(5);
    width: to-vw-xxxl(723);
  }

  @include screen (md) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
}

.main-title {
  position: absolute;
  right: 60px;
  bottom: 185px;
  z-index: -1;
  width: 487px;

  @media screen and (min-width: 1921px) {
    right: to-vw-xxl(60);
    bottom: to-vw-xxl(185);
    width: to-vw-xxl(487);
  }

  @include screen(xl) {
    right: to-vw-xxxl(60);
    bottom: to-vw-xxxl(185);
    width: to-vw-xxxl(487);
  }

  @include screen (md) {
    display: none;
  }
}

.pizza {
  position: absolute;
  right: 110px;
  bottom: 10px;
  width: 140px;

  @media screen and (min-width: 1921px) {
    right: to-vw-xxl(110);
    bottom: to-vw-xxl(10);
    width: to-vw-xxl(140);
  }

  @include screen(xl) {
    right: to-vw-xxxl(110);
    bottom: -.479167vw;
    width: 8.291667vw;
  }

  @include screen(md) {
    display: none;
  }
}

.trigger-cta-dummy {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: transparent;
  transform: translate(-50%, -50%);
}

.call-to-action {
  position: fixed;
  right: 26px;
  bottom: 100px;
  display: none;
  width: 173px;
  opacity: 0;
  transition: opacity 200ms ease;

  @include screen(md) {
    display: none !important;
  }

  &.active {
    display: inline-block;
    opacity: 1;
  }

  & > a,
  & > img {
    display: inline-block;
  }
}

.cta-btn {
  transform-origin: 0 100%;
  animation: animate-swing-bounce .6s ease infinite alternate-reverse;
}

@keyframes animate-swing-bounce {
  0% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(-10deg);
  }

  80% {
    transform: rotate(0deg);
  }
}

// 動畫
.container.animate.ready {
  .sub-title {
    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: center;
    animation: animate-scale-bounce 1000ms linear both;
    animation-delay: 200ms;
  }

  .main-title {
    opacity: 0;
    transform: translateX(100px);
    animation: animate-slide-in 1200ms cubic-bezier(.34, 1.56, .64, 1) 0s normal forwards;
    animation-delay: 600ms;
  }

  .pizza {
    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: center;
    animation: animate-scale-bounce 1200ms linear both;
    animation-delay: 1000ms;
  }

  .people {
    opacity: 0;
    animation: fade-in 600ms ease-out 0s 1 normal forwards;
    animation-delay: 600ms;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
