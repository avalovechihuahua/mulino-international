<template>
  <div
    ref="slide-container"
    class="slide-container"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <div
      class="slide-wrapper"
      :style="slideWrapperStyle"
      @transitionend="slideItemTransitionendHandler"
    >
      <SlideItem
        v-for="(content, index) in slideDuplicate"
        ref="slide-item"
        :key="index"
        class="slide-item"
        :job="content"
        :active="currentPage === index"
      ></SlideItem>
    </div>
    <div class="slide-controls">
      <div
        v-for="(page, _index) in contents.length"
        :key="_index"
        class="page"
        :class="{active: page - 1 === currentPage}"
        @click="slideHandler(page - 1)"
      ></div>
    </div>
  </div>
</template>

<script>
import SlideItem from '@/components/Cards/jobListItem'
import Hammer from 'hammerjs'
let slideHammer
let autoPlayTimer
let breakTimer
const autoPlayTimerTime = 3000
export default {
  name: 'Slider',
  components: {
    SlideItem
  },
  props: {
    contents: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      currentPage: 0,
      moveDistance: 0,
      turnBack: false,
      direction: 'next',
      isMouseEnter: false,
      isMoving: false,
      slideItemWidth: 279
    }
  },

  computed: {
    totalItems () {
      return this.contents.length
    },
    slideDuplicate () {
      const arr = [...this.contents]
      for (let i = 0; i < this.fakeItemNum; i++) {
        arr.unshift(this.contents[this.contents.length - 1 - i])
      }
      for (let i = 0; i < this.fakeItemNum + 1; i++) {
        arr.push(this.contents[i])
      }
      return arr
    },
    fakeItemNum () {
      return Math.floor(this.contents.length / 2)
    },
    currentSlideIndex () {
      return this.currentPage + this.fakeItemNum
    },
    slideWrapperPosition () {
      if (this.contents.length % 2 === 0) {
        return this.moveDistance - this.slideItemWidth / 2
      } else {
        return this.moveDistance
      }
    },
    slideWrapperStyle () {
      let cssObj
      if (this.turnBack) {
        cssObj = {
          width: `${this.slideItemWidth * this.contents.length}px`,
          transform: `translateX(${this.slideWrapperPosition}px)`
        }
      } else {
        cssObj = {
          width: `${this.slideItemWidth * this.contents.length}px`,
          transform: `translateX(${this.slideWrapperPosition}px)`,
          transitionProperty: 'transform',
          transitionDuration: '.3s'
        }
      }
      return cssObj
    }
  },
  watch: {
    slideItemWidth (val) {
      this.$nextTick(() => {
        this.calcMoveDistance()
      })
    }
  },
  mounted () {
    slideHammer = new Hammer(this.$refs['slide-container'])
    slideHammer.on('swipeleft', this.swipeLeftHandler)
    slideHammer.on('swiperight', this.swipeRightHandler)
    autoPlayTimer = window.setTimeout(this.autoPlay, this.autoPlayTimerTime)
  },
  methods: {
    autoPlay () {
      window.clearTimeout(autoPlayTimer)
      if (this.ifMouseEnter) return
      this.slideHandler(this.currentPage + 1)
      autoPlayTimer = window.setTimeout(this.autoPlay, autoPlayTimerTime)
    },
    mouseEnterHandler () {
      window.clearTimeout(autoPlayTimer)
      this.ifMouseEnter = true
    },
    mouseLeaveHandler () {
      this.ifMouseEnter = false
      autoPlayTimer = window.setTimeout(this.autoPlay, autoPlayTimerTime)
    },
    swipeLeftHandler () {
      this.slideHandler(this.currentPage + 1)
      window.clearTimeout(autoPlayTimer)
      autoPlayTimer = window.setTimeout(this.autoPlay, autoPlayTimerTime)
    },
    swipeRightHandler () {
      this.slideHandler(this.currentPage - 1)
      window.clearTimeout(autoPlayTimer)
      autoPlayTimer = window.setTimeout(this.autoPlay, autoPlayTimerTime)
    },
    calcMoveDistance () {
      this.moveDistance = -(this.currentPage + this.slideItemWidth)
    },
    slideHandler (dir) {
      this.turnBack = false
      this.isMoving = true
      const minus = dir - this.currentPage
      const adjust = -1
      this.direction = dir > this.currentPage ? 'next' : 'prev'
      this.moveDistance = this.moveDistance + minus * adjust * this.slideItemWidth
      if (dir > this.contents.length - 1) {
        this.changeDis(0)
      } else if (dir < 0) {
        this.changeDis(-this.slideItemWidth * (this.contents.length - 1))
      }
      this.currentPage = (dir + this.contents.length) % this.contents.length
    },
    changeDis (num) {
      window.clearTimeout(breakTimer)
      breakTimer = window.setTimeout(() => {
        this.moveDistance = num
        this.turnBack = true
        this.isMoving = false
      }, 200)
    },
    slideItemTransitionendHandler () {
      this.isMoving = false
    }
  }

}
</script>

<style lang="scss" scoped>
.slide-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;

  @include screen(md) {
    overflow: initial;
  }
}

.slide-wrapper {
  display: flex;
  align-items: center;
}

.slide-item {
  flex-shrink: 0;
}
</style>

<style lang="scss" scoped>
.slide-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .page {
    @include clickable;
    width: 12px;
    height: 12px;
    margin: 0 7px;
    background-color: #fdecce;
    border-radius: 50%;

    &.active {
      background-color: color(green);
    }
  }
}
</style>
