<template>
  <section
    id="job-list-section"
    v-animate
    class="container animate"
  >
    <img
      class="title"
      src="@/assets/img/intro/part-2-2-tit@2x.png"
      alt="成為我們的夥伴吧!"
    >
    <img
      class="bg bg--left"
      src="@/assets/img/intro/bg-3@2x.png"
      alt="背景"
    >
    <img
      class="bg bg--right"
      src="@/assets/img/intro/bg-2@2x.png"
      alt="背景"
    >
    <img
      class="bg bg--tea"
      src="@/assets/img/intro/tea@2x.png"
      alt="背景"
    >
    <div
      class="job-wrapper"
    >
      <div
        v-for="(content, index) in contents"
        :key="content.id"
        class="option"
      >
        <div
          class="store"
          @mouseenter="hoverStore(index)"
          @click="clickStore(index)"
        >
          <div :class="{active: currentHoverIndex === index}">
            <div class="text">
              <span
                v-for="(t, _index) in content.title"
                :key="_index"
              >{{ t }}</span>
            </div>
          </div>
        </div>
        <div
          class="panel"
          :class="{active: currentHoverIndex === index}"
        >
          <img
            class="logo"
            :src="content.logoImgSrc"
            alt="logo"
          >
          <div class="job-list-wrapper">
            <ul
              class="job-list"
            >
              <li
                v-for="(job, __index) in content.jobList"
                :key="__index"
                class="job-list-item"
                :class="{'enable': !job.isFull}"
              >
                <a
                  :href="content.link"
                  target="_blank"
                >
                  <div class="inner-title">
                    <span
                      v-for="(t, ___index) in job.title"
                      :key="___index"
                    >{{ t }}</span>
                  </div>

                  <span
                    href="#"
                    class="button"
                    :style="`background-image:url(${getButtonBg(!job.isFull)});`"
                  >
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      vw: window.innerWidth,
      isEnableHover: true,
      currentHoverIndex: 0,
      contents: [
        {
          id: 0,
          title: ['靜岡勝政', '日式豬排'],
          link: 'https://www.104.com.tw/jobs/main/',
          logoImgSrc: require('@/assets/img/intro/big-logo-1@2x.png'),
          jobList: [
            {
              title: ['【中壢大江店】', '助理廚師'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '總經理助理'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '助理廚房經理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '主廚'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '副店長'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '助理廚房經理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '副創意總監'],
              isFull: false
            },

            {
              title: ['【中壢大江店】', '廚師經理'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '烹飪培訓生'],
              isFull: false
            }
          ]
        },
        {
          id: 1,
          title: ['伊勢路勝勢日', '式豬排'],
          link: 'https://www.104.com.tw/jobs/main/',
          logoImgSrc: require('@/assets/img/intro/big-logo-2@2x.png'),
          jobList: [
            {
              title: ['【中壢大江店】', '助理廚師'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '總經理助理'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '助理廚房經理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '副創意總監'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '品牌經理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '廚師經理'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '烹飪培訓生'],
              isFull: true
            }
          ]
        },
        {
          id: 2,
          title: ['UZNA OMOM', '杏桃鬆餅屋'],
          link: 'https://www.104.com.tw/jobs/main/',
          logoImgSrc: require('@/assets/img/intro/big-logo-3@2x.png'),
          jobList: [
            {
              title: ['【中壢大江店】', '店長'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '區域主任'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '助理廚師'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '品牌經理'],
              isFull: false
            }
          ]
        },
        {
          id: 3,
          title: ['鳥丈爐端燒'],
          link: 'https://www.104.com.tw/jobs/main/',
          logoImgSrc: require('@/assets/img/intro/big-logo-4@2x.png'),
          jobList: [
            {
              title: ['【中壢大江店】', '主廚'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '副店長'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '區域主任'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '總經理助理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '副創意總監'],
              isFull: false
            },

            {
              title: ['【中壢大江店】', '廚師經理'],
              isFull: false
            }
          ]
        },
        {
          id: 4,
          title: ['SPIGA PASTA', '石壁家', '義大利麵'],
          link: 'https://www.104.com.tw/jobs/main/',
          logoImgSrc: require('@/assets/img/intro/big-logo-5@2x.png'),
          jobList: [
            {
              title: ['【中壢大江店】', '主廚'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '總經理助理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '助理廚房經理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '廚師經理'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '烹飪培訓生'],
              isFull: false
            }
          ]
        },
        {
          id: 5,
          title: ['泰迪', '農園咖哩'],
          link: 'https://www.104.com.tw/jobs/main/',
          logoImgSrc: require('@/assets/img/intro/big-logo-6@2x.png'),
          jobList: [
            {
              title: ['【中壢大江店】', '店長'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '主廚'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '助理廚房經理'],
              isFull: true
            },
            {
              title: ['【中壢大江店】', '廚師經理'],
              isFull: false
            },
            {
              title: ['【中壢大江店】', '烹飪培訓生'],
              isFull: true
            }
          ]
        }
      ]
    }
  },
  computed: {
    isUnderXlScreen () {
      if (this.vw <= 1366) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
    })
  },
  methods: {
    getButtonBg (active) {
      let bg
      if (active) {
        bg = require('@/assets/img/intro/btn@2x.png')
      } else {
        bg = require('@/assets/img/intro/btn-active@2x.png')
      }
      return bg
    },
    doScrolling (elementY, duration) {
      const startingY = window.pageYOffset
      const diff = elementY - startingY
      let start

      window.requestAnimationFrame(function step (timestamp) {
        if (!start) start = timestamp
        const time = timestamp - start
        const percent = Math.min(time / duration, 1)

        window.scrollTo(0, startingY + diff * percent)

        if (time < duration) {
          window.requestAnimationFrame(step)
        }
      })
    },
    clickStore (idx) {
      this.currentHoverIndex = idx
      if (this.isUnderXlScreen) {
        this.$nextTick(() => {
          const el = document.querySelector('.store .active')
          const customOffset = -75
          const topPos = el.getBoundingClientRect().top + window.scrollY + customOffset
          this.doScrolling(topPos, 400)
        })
      }
    },
    hoverStore (idx) {
      if (this.isUnderXlScreen) {
        return
      }
      this.currentHoverIndex = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 442px;
  margin: 300px auto 44px;

  @include screen(xl) {
    height: auto;
    margin: 160px auto 0px;
    padding: 0 $container-padding-pad;
  }

  @include screen(md) {
    margin: 25px 0 0;
    padding: 27px $container-padding-mb 100px;
    background-image: url('~@/assets/img/intro/noddle@3x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
}

.bg {
  position: absolute;

  &--left {
    top: 50%;
    left: 0;
    z-index: 2;
    width: 682px;
    transform: translateY(calc(-50% - 274px));

    @include screen(md) {
      display: none;
    }
  }

  &--right {
    top: 50%;
    right: 0;
    z-index: 1;
    width: auto;
    height: 891px;
    transform: translateY(calc(-50% - 80px));

    @media screen and (min-width: 1921px) {
      width: 100%;
      height: auto;
      max-height: 891px;
    }

    @include screen(md) {
      display: none;
    }
  }

  &--tea {
    bottom: -105px;
    left: 50%;
    z-index: 2;
    width: 210px;
    transform: translateX(calc(-50% + 735px));

    @include screen(md) {
      display: none;
    }
  }
}

.title {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 3;
  max-width: 549px;
  margin: 0 auto;
  transform: translate(-50%, calc(-100% - 24px));

  @include screen(md) {
    position: relative;
    top: initial;
    left: initial;
    width: 100%;
    margin-bottom: 20px;
    transform: initial;
  }
}

.job-wrapper {
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1097px;
  margin: 0 auto;
  margin-bottom: 400px;

  @include screen(xl) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-bottom: 0;
  }
}

.option {
  @include screen(xl) {
    width: 100%;
  }
}

.store {
  @include clickable;
  width: 183px;
  height: 100px;
  padding-right: 1px;

  @include screen(xl) {
    height: 50px;
    margin-bottom: 10px;
  }

  &:last-child {
    padding-right: 0px;
    padding-left: 1px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #c3d799;

    &.active {
      background-color: color(green);
    }
  }

  @include screen(xl) {
    flex-direction: column;
    width: 100%;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @include screen(xl) {
      flex-direction: row;
    }

    & span {
      @extend %source-han-sans;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.44;
      color: color(white);
    }
  }
}

.panel {
  position: absolute;
  top: 100px;
  left: 0;
  display: none;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 342px;
  padding: 19px 27px 23px;
  background-color: color(green);

  @include screen(xl) {
    background: none;
  }

  &.active {
    display: flex;

    @include screen(xl) {
      margin-bottom: 10px;
    }
  }

  @include screen(xl) {
    position: relative;
    top: initial;
    left: initial;
    height: auto;
    padding: 0;
  }
}

.logo {
  width: 318px;

  @include screen(xl) {
    display: none;
  }
}

.job-list-wrapper {
  position: relative;
  z-index: 1;
  width: 598px;
  height: 100%;
  margin-left: 83px;
  overflow-y: auto;

  @include screen(xl) {
    width: 100%;
    height: auto;
    max-height: 365px;
    margin-left: 0;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: color(white);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: color(green);
  }
}

.job-list {
  width: 100%;
  margin: 0;
  padding: 0;
  padding-right: 4px;

  @include screen(xl) {
    padding-right: 0;
  }
}

.job-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 2px;
  padding: 0px 20px 0px 8px;
  background-color: color(white);

  &.enable {
    pointer-events: none;
    cursor: not-allowed;

    & a {
      cursor: not-allowed;
    }
  }

  &:hover {
    @media (hover: hover) {
      & span {
        color: color(green);
      }
    }
  }

  @include screen(xl) {
    margin-bottom: 1px;
  }

  @include screen(md) {
    height: auto;
    padding: 5px 20px 5px 8px;
  }

  & span {
    @extend %source-han-sans;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: color(gray, 600);

    @include screen(xl) {
      font-size: 20px;
      line-height: 1.2;
    }
  }

  .inner-title {
    display: flex;
    align-items: center;
    @include screen(md) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      & span:nth-child(2) {
        padding-left: 11px;
      }
    }
  }

  & > a {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }

  .button {
    display: inline-block;
    width: 104px;
    height: 41px;
    background-image: url('~@/assets/img/intro/btn@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    & img {
      display: inline-block;
    }
  }
}

// animation
.container.animate {
  .title {
    opacity: 0;
    transition: transform 600ms $ease-out-back, opacity 200ms linear;
    transform: translate(-50%, 100%);

    @include screen(md) {
      transition: transform 600ms $ease-out-back, opacity linear;
      transform: translate(0, 100%);
    }
  }

  .job-wrapper {
    opacity: 0;
    transform: translateX(100px);
    animation: animate-slide-up 500ms cubic-bezier(.34, 1.56, .64, 1) 0s normal forwards;
    animation-play-state: paused;
    animation-delay: 700ms;
    @include screen(md) {
      animation-delay: 500ms;
    }
  }

  &.activated {
    .title {
      opacity: 1;
      transform: translate(-50%, calc(-100% - 24px));

      @include screen(md) {
        transform: translate(0, 0);
      }
    }

    .job-wrapper {
      animation-play-state: running;
    }
  }
}
</style>
