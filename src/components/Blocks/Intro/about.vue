<template>
  <section
    id="about-section"
    v-animate
    class="container animate"
    :class="{ready: isReady}"
  >
    <div class="info">
      <h2
        v-animate
        class="title"
      >
        <img
          :src="titleImgSrc"
          alt="慕里諾國際餐飲集團"
        >
      </h2>
      <div class="show-at-md">
        <img
          v-animate
          class="brand-md"
          src="@/assets/img/intro/logo_mb@2x.png"
          alt="品牌"
        >
        <div class="bg-wrapper">
          <p
            v-animate
            class="paragraph"
          >
            慕里諾國際餐飲集團，以引進日本餐飲品牌為主，旗下6大品牌，全台聯合招募！<br>對於每位夥伴，我們相當重視且珍惜。在這裡，將提供完整教育訓練、順暢的職涯發展管道，多元且貼心的福利。
          </p>
          <img
            v-animate
            class="sub-title"
            :src="subTitleImgSrc"
            alt="現在，一起打造美味，加入我們吧!"
          >
        </div>
      </div>
      <div class="show-desktop-md">
        <p
          v-animate
          class="paragraph"
        >
          慕里諾國際餐飲集團，以引進日本餐飲品牌為主，旗下6大品牌，全台聯合招募！<br>對於每位夥伴，我們相當重視且珍惜。在這裡，將提供完整教育訓練、順暢的職涯發展管道，多元且貼心的福利。
        </p>
        <img
          v-animate
          class="sub-title"
          :src="subTitleImgSrc"
          alt="現在，一起打造美味，加入我們吧!"
        >
      </div>

      <div class="show-desktop-md">
        <div
          v-animate
          class="brands-wrapper"
        >
          <div class="inner">
            <img
              v-for="brand in brands"
              :key="brand.title"
              class="brand"
              :src="brand.imgSrc"
              :alt="brand.title"
            >
          </div>
        </div>
      </div>
    </div>
    <div
      ref="slider-container"
      class="slider-container"
    >
      <transition-group
        tag="div"
        class="slider-wrapper"
        name="slide-fade"
      >
        <div
          v-for="(s, index) in sliderImgs"
          v-show="currentSlideIndex === index"
          :key="s.title"
          class="slide"
          @mouseenter="mouseEnterHandler"
          @mouseleave="mouseLeaveHandler"
        >
          <img
            draggable="false"
            :src="s.imgSrc"
            :alt="s.title"
          >
        </div>
      </transition-group>
      <div class="slider-controls">
        <div
          v-for="page in sliderImgsLength"
          :key="page"
          class="page"
          :class="[{active: page - 1 === currentSlideIndex}]"
          @click="changeToSlide(page - 1)"
        >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hammer from 'hammerjs'
let slideHammer
let autoPlayTimer
const autoPlaySpeed = 3000
export default {
  data () {
    return {
      vw: window.innerWidth,
      mbWidth: 768,
      xlWidth: 1366,
      currentSlideIndex: 0,
      slideDirection: 1, // 1 代表正向滑動, -1 代表反向滑動
      isMouseEnter: false,
      brands: [
        {
          title: '勝政',
          imgSrc: require('@/assets/img/intro/logo-1@2x.png')
        },
        {
          title: '勝勢',
          imgSrc: require('@/assets/img/intro/logo-2@2x.png')
        },
        {
          title: '鳥丈',
          imgSrc: require('@/assets/img/intro/logo-3@2x.png')
        },
        {
          title: '杏桃鬆餅屋',
          imgSrc: require('@/assets/img/intro/logo-4@2x.png')
        },
        {
          title: 'SPIGA',
          imgSrc: require('@/assets/img/intro/logo-6@2x.png')
        },
        {
          title: '泰迪農園咖哩',
          imgSrc: require('@/assets/img/intro/logo-7@2x.png')
        }
      ],
      sliderImgs: [
        {
          title: '豬肉',
          imgSrc: require('@/assets/img/intro/img-1@2x.png')
        },
        {
          title: '蛋糕',
          imgSrc: require('@/assets/img/intro/img-2@2x.png')
        },
        {
          title: '火鍋',
          imgSrc: require('@/assets/img/intro/img-3@2x.png')
        },
        {
          title: '牛肉',
          imgSrc: require('@/assets/img/intro/img-4@2x.png')
        }
      ]
    }
  },
  computed: {
    isReady () {
      return !this.$store.state.loading.isShow
    },
    sliderImgsLength () {
      return this.sliderImgs.length
    },
    isMobile () {
      if (this.vw <= this.mbWidth) {
        return true
      } else {
        return false
      }
    },
    titleImgSrc () {
      if (this.isMobile) {
        return require('@/assets/img/intro/part-1-tit-1_mb@2x.png')
      } else {
        return require('@/assets/img/intro/part-1-tit-1@2x.png')
      }
    },
    subTitleImgSrc () {
      if (this.isMobile) {
        return require('@/assets/img/intro/tit-2_mb@2x.png')
      } else {
        return require('@/assets/img/intro/tit-2@2x.png')
      }
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
      if (this.vw <= this.xlWidth) {
        window.clearTimeout(autoPlayTimer)
      }
    })

    slideHammer = new Hammer(this.$refs['slider-container'])
    slideHammer.on('swiperight', this.swipeRight)
    slideHammer.on('swipeleft', this.swipeLeft)

    autoPlayTimer = window.setTimeout(this.autoPlay, autoPlaySpeed)
  },
  methods: {
    swipeLeft () {
      this.changeToSlide(this.currentSlideIndex + 1)
    },
    swipeRight () {
      this.changeToSlide(this.currentSlideIndex - 1)
    },
    changeToSlide (idx) {
      this.slideDirection = this.currentSlideIndex > idx ? -1 : 1
      this.currentSlideIndex = (idx + this.sliderImgsLength) % this.sliderImgsLength
      this.restartAutoPlayAfter(autoPlaySpeed)
    },
    autoPlay () {
      if (this.isMouseEnter) {
        return
      }
      this.swipeLeft()
      this.restartAutoPlayAfter(autoPlaySpeed)
    },
    restartAutoPlayAfter (speed) {
      window.clearTimeout(autoPlayTimer)
      autoPlayTimer = window.setTimeout(this.autoPlay, speed)
    },
    mouseEnterHandler () {
      window.clearTimeout(autoPlayTimer)
      this.isMouseEnter = true
    },
    mouseLeaveHandler () {
      this.isMouseEnter = false
      this.restartAutoPlayAfter(1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;

  @include screen(xl) {
    flex-direction: column;
    align-items: center;
    padding: 0 $container-padding-mb;
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 683px;
  margin-right: 80px;

  @include screen(xl) {
    margin-right: 0;
  }
}

.title {
  max-width: 438px;
  margin-bottom: 26px;
  @include screen(md) {
    order: 1;
    max-width: 249px;
    margin-bottom: 5px;
  }
}

.paragraph {
  @extend %source-han-sans;
  position: relative;
  z-index: 1;
  margin-bottom: 7px;
  font-size: 20px;
  color: color(gray, 600);
  text-align: justify;

  @include screen(md) {
    order: 3;
    margin-bottom: 23px;
  }
}

.bg-wrapper {
  position: relative;
  width: 100%;
  padding: 33px $container-padding-mb 39px;
  background-image: url('~@/assets/img/intro/path_mb@2x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 1px;
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/img/intro/path_mb@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translateX(100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1px;
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/img/intro/path_mb@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translateX(-100%);
  }
}

.sub-title {
  width: 471px;
  margin: 0 auto 25px;

  @include screen(md) {
    order: 4;
    width: 90%;
    margin: 0 auto 0px;
  }
}

.show-at-md {
  order: 2;

  .brand-md {
    margin-bottom: 33px;
  }
}

.brands-wrapper {
  .inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @include screen(md) {
      flex-wrap: wrap;
    }
  }
  position: relative;
  width: 100%;
  padding: 35px 90px;
  background-image: url('~@/assets/img/intro/frame-up@2x.png'), url('~@/assets/img/intro/frame-middle@2x.png'), url('~@/assets/img/intro/frame-middle-copy@2x.png'), url('~@/assets/img/intro/frame-middle-copy@2x.png'), url('~@/assets/img/intro/frame-down@2x.png');
  background-repeat: no-repeat;
  background-position: center top, center 30px, center 60px, center 80px, center bottom;
  background-size: 100% auto;

  @include screen(md) {
    order: 2;
    padding: 45px 40px 23px;
    background-image: url('~@/assets/img/intro/frame-up@2x.png'), url('~@/assets/img/intro/frame-middle@2x.png'), url('~@/assets/img/intro/frame-middle-copy@2x.png'), url('~@/assets/img/intro/frame-middle-copy@2x.png'),url('~@/assets/img/intro/frame-middle-copy@2x.png'),url('~@/assets/img/intro/frame-middle-copy@2x.png'), url('~@/assets/img/intro/frame-middle-copy@2x.png'),url('~@/assets/img/intro/frame-middle-copy@2x.png'),url('~@/assets/img/intro/frame-middle-copy@2x.png'),url('~@/assets/img/intro/frame-middle-copy@2x.png'), url('~@/assets/img/intro/frame-down@2x.png');
    background-repeat: no-repeat;
    background-position: center top, center 30px, center 60px, center 80px, center 100px, center 120px,center 140px,center 160px,center 180px,center 210px, center bottom;
    background-size: 100% auto;
  }

  &::before {
    content: '6 大品牌 全台合招募';
    @extend %source-han-seriftc-bold;
    position: absolute;
    top: 10px;
    left: 50%;
    font-size: 20px;
    color: color(gray, 600);
    transform: translateX(-50%) translateY(-50%);

    @include screen(md) {
      z-index: 1;
      width: 100%;
      font-size: 28px;
      text-align: center;
    }
  }

  &::after {
    @include screen(md) {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      width: 280px;
      height: 20px;
      background-color: color(white);
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .brand {
    width: 55px;
    margin: 0 15px;

    @include screen(md) {
      width: 63px;
      margin-bottom: 15px;
    }
  }
}

// slider
.slider-container {
  position: relative;
  width: 378px;
  height: 571px;
  cursor: grab;

  @include screen(xl) {
    display: none;
  }
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider-controls {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  transform: translateX(-50%);

  .page {
    @include clickable;
    width: 17px;
    height: 17px;
    margin: 0 10px;
    background-color: #f8f8f8;
    border-radius: 50%;
    transition: background-color 100ms linear;

    &.active {
      background-color: color(green);
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity .5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.container.animate.ready {
  .title {
    opacity: 0;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 300, 0, 0, 1);
    animation: title-slide-in 1400ms linear both;
    animation-play-state: paused;

    &.activated {
      animation-play-state: running;
    }
  }

  .paragraph {
    opacity: 0;
    transform: translateX(20px);
    animation: paragraph-slide-in 500ms ease-out 0s 1 normal forwards;
    animation-play-state: paused;
    animation-delay: 400ms;

    &.activated {
      animation-play-state: running;
    }
  }

  .sub-title {
    visibility: hidden;
    opacity: 0;
    animation: animate-flash 1s 2 both;
    animation-play-state: paused;
    animation-delay: 800ms;

    &.activated {
      visibility: visible;
      animation-play-state: running;
    }
  }

  .brands-wrapper,
  .brand-md {
    opacity: 0;
    transform: translateY(100px);
    animation: animate-slide-up 500ms cubic-bezier(.34, 1.56, .64, 1) 0s normal forwards;
    animation-play-state: paused;

    &.activated {
      animation-play-state: running;
    }
  }
}

.container.animate.activated {
  @media screen and (max-width: 480px) {
    .title {
      animation-play-state: running;
    }
  }
}
</style>
