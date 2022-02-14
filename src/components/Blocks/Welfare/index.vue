<template>
  <section
    id="welfare-section"
    v-animate
    class="container animate"
  >
    <img
      class="decoration-crab"
      src="@/assets/img/welfare/crab@2x.png"
      alt="螃蟹"
    >
    <img
      class="decoration-noddle"
      src="@/assets/img/welfare/noddle@2x.png"
      alt="義大利麵"
    >
    <img
      class="decoration-coffee"
      src="@/assets/img/welfare/cofee@2x.png"
      alt="咖啡"
    >
    <img
      class="decoration-pot"
      src="@/assets/img/welfare/pot@2x.png"
      alt="麵包"
    >
    <div
      v-animate
      class="title-anim-tri-dummy"
    ></div>
    <div class="title-wrapper">
      <h2
        v-animate
        class="title"
      >
        <img
          :src="titleImgSrc"
          alt="職涯福利"
        >
      </h2>
      <p
        v-animate
        class="paragraph"
      >
        你用心傳遞美好，<br class="br-show-at-md">我們也為你打造美好。<br>完整職涯培訓＋貼心多元福利，<br class="br-show-at-md">讓您職涯生活雙平衡！
      </p>
    </div>
    <div class="training-wrapper">
      <img
        v-animate
        class="grow-img"
        src="@/assets/img/welfare/part-3-tit-3@2x.png"
        alt="扎實培訓，專業成長"
      >
      <ul
        v-animate
        class="common-list common-list--training"
      >
        <li class="common-list-item">
          新人訓練56H、在職訓練<br><span>(專業技能、領導管理職能)</span>、初中階主管培訓
        </li>
        <li class="common-list-item">
          職涯路徑<span><br class="br">(※實際依不同店鋪有所不同)</span>
        </li>
      </ul>
    </div>
    <div class="sequence-wrapper">
      <img
        v-animate
        class="sequence"
        :src="sequenceImgSrc"
        alt="升遷順序"
      >
    </div>

    <div class="bonus-wrapper">
      <div class="contents">
        <img
          v-animate
          class="salary-img"
          src="@/assets/img/welfare/part-3-tit-4@2x.png"
          alt="多項獎金，薪情up"
        >
        <ul
          v-animate
          class="common-list common-list--bonus"
        >
          <li class="common-list-item">
            介紹獎金
          </li>
          <li class="common-list-item">
            證照/店務加給
          </li>
          <li class="common-list-item">
            月營運達成獎勵
          </li>
          <li class="common-list-item">
            單日業績突破獎勵
          </li>
          <li class="common-list-item">
            年度業績達成獎勵
          </li>
        </ul>
      </div>
      <div
        v-animate
        class="photos"
      >
        <img
          src="@/assets/img/welfare/img-1@2x.png"
          alt="廚師照片"
        >
        <img
          src="@/assets/img/welfare/group-2@2x.png"
          alt="煮飯照片"
        >
      </div>
    </div>
    <div class="welfare-wrapper">
      <div
        v-animate
        class="pizza"
      >
        <img
          src="@/assets/img/welfare/img-3@2x.png"
          alt="製作pizza照片"
        >
      </div>

      <div class="contents">
        <img
          v-animate
          class="welfare-img"
          src="@/assets/img/welfare/part-3-tit-5@2x.png"
          alt="貼心福利，感動up"
        >
        <div
          v-animate
          class="list-grp"
        >
          <ul class="common-list common-list--welfare">
            <li class="common-list-item">
              三節獎金及禮品
            </li>
            <li class="common-list-item">
              供餐
            </li>
            <li class="common-list-item">
              租屋/生育/婚、喪補助
            </li>
            <li class="common-list-item">
              自選式福利<span>(健檢、旅遊、
                藝文、電影、課程....等)</span>
            </li>
          </ul>
          <ul class="common-list common-list--welfare">
            <li class="common-list-item">
              國外技術見習
            </li>
            <li class="common-list-item">
              住院慰問金
            </li>
            <li class="common-list-item">
              員工聚餐、春酒尾牙
            </li>
            <li class="common-list-item">
              同仁與眷屬用餐優惠
            </li>
            <li class="common-list-item">
              耶誕、萬聖節活動
            </li>
          </ul>
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
      mbWidth: 768,
      lgWidth: 1024
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
    isPad () {
      if (this.vw <= this.lgWidth) {
        return true
      } else {
        return false
      }
    },
    sequenceImgSrc () {
      if (this.isPad) {
        return require('@/assets/img/welfare/sequence_mb@2x.png')
      } else {
        return require('@/assets/img/welfare/sequence@2x.png')
      }
    },
    titleImgSrc () {
      if (this.isMobile) {
        return require('@/assets/img/welfare/part-3-tit@2x_mb.png')
      } else {
        return require('@/assets/img/welfare/part-3-tit@2x.png')
      }
    }

  },
  mounted () {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
    })
  }
}
</script>

<style lang="scss" scoped>
.title-anim-tri-dummy {
  position: absolute;
  top: -65px;
  left: 0;
  width: 10px;
  height: 10px;
  visibility: hidden;
  opacity: 0;
}

.container {
  position: relative;
  margin: -182px auto 0;
  padding: 0 0 72px;
  background-image: url('~@/assets/img/welfare/bg-4@2x.png'), url('~@/assets/img/welfare/bg-3@2x.png'), url('~@/assets/img/welfare/bg-6_crop.png');
  background-repeat: no-repeat;
  background-position: left 89px, right 87px, center bottom;
  background-size: 772px auto, 600px auto, 1922px auto;

  @media screen and (min-width: 1921px) {
    background-size: 772px auto, 600px auto, 87% auto;
  }

  @include screen(xl) {
    margin: 20px 0 0;
    background-image: url('~@/assets/img/welfare/bg-6_crop.png');
    background-position: center bottom;
    background-size: 1922px auto;
  }

  @include screen(lg) {
    background-size: auto;
  }

  @include screen(md) {
    z-index: -1;
    margin: -5px 0 0;
    margin-bottom: -30px;
    padding: 0 $container-padding-mb 72px;
    background-image: url('~@/assets/img/welfare/bg_long@2x.png');
    background-position: center bottom;
    background-size: 100% auto;
  }
}

.decoration {
  &-crab {
    display: none;

    @include screen(md) {
      position: absolute;
      top: 650px;
      right: 0;
      display: block;
      width: 116px;
    }
  }

  &-noddle {
    position: absolute;
    bottom: 573px;
    left: 0;
    width: to-vw-xxxl(305);
    @include screen(xl) {
      display: none;
    }
  }

  &-coffee {
    position: absolute;
    bottom: 58px;
    left: to-vw-xxxl(19);
    width: to-vw-xxxl(356);
    @include screen(xl) {
      display: none;
    }
  }

  &-pot {
    position: absolute;
    right: 0;
    bottom: 756px;
    width: to-vw-xxxl(294);
    @include screen(xl) {
      display: none;
    }
  }
}

.title-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 35px;

  @include screen(lg) {
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    text-align: center;
  }

  @include screen(md) {
    margin-bottom: 24px;
  }
}

.title {
  position: relative;
  width: 261px;
  margin-right: 25px;

  @include screen(lg) {
    margin-right: 0;
  }

  &::after {
    @include screen(lg) {
      content: '';
      position: absolute;
      top: 28px;
      right: -60px;
      width: 91px;
      height: 55px;
      background-image: url('~@/assets/img/welfare/star@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @include screen(md) {
        top: -8px;
        right: -37px;
      }
    }
  }
}

.paragraph {
  @extend %source-han-seriftc-bold;
  position: relative;
  padding-top: 40px;
  font-size: 20px;
  color: color(gray, 600);

  @include screen(lg) {
    padding-top: 9px;
  }

  @include screen(md) {
    padding-top: 2px;
  }

  .br-show-at-md {
    display: none;

    @include screen(md) {
      display: block;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 28px;
    right: -60px;
    width: 91px;
    height: 55px;
    background-image: url('~@/assets/img/welfare/star@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @include screen(lg) {
      content: none;
    }
  }
}

.training-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @include screen(lg) {
    flex-direction: column;
    align-items: center;
  }

  & img {
    width: 240px;
    margin-right: 20px;

    @include screen(lg) {
      margin-right: 0;
    }
  }
}

.common-list {
  margin: 0;
  padding-left: 22px;

  &--training {
    margin-top: 34px;

    @include screen(lg) {
      margin-top: 23px;
    }

    @include screen(md) {
      max-width: 240px;
    }
  }

  &--bonus {
    margin-top: 2px;

    @include screen(md) {
      max-width: 240px;
    }

    & > li {
      line-height: 1.7;
    }
  }

  &--welfare {
    max-width: 227px;
    margin-top: 1px;

    @include screen(md) {
      max-width: 240px;
    }

    & > li {
      line-height: 1.7;
    }
  }

  &-item {
    @extend %source-han-sans;
    position: relative;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 1.35;
    color: color(brown);
    letter-spacing: 0;

    &::before {
      content: '•';
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
      color: color(brown);
      transform: translateX(-100%);
    }

    & span {
      font-size: 16px;
      color: color(gray, 600);
    }

    .br {
      display: none;
      @include screen(md) {
        display: initial;
      }
    }
  }
}

.sequence-wrapper {
  position: relative;

  @include screen(lg) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 68.6%;
    max-width: 350px;
    margin: 0 auto 31px;
  }
}

.sequence {
  max-width: 794px;
  margin: 0 auto;
  margin-top: -25px;
  margin-bottom: 62px;
  animation-delay: 800ms !important;

  @include screen (lg) {
    width: 50%;
    max-width: 181px;
    margin: 0;
    margin-top: 22px;
  }

  @include screen(md) {
    width: initial;
    margin-left: -31px;
    animation-delay: 300ms !important;
  }
}

.bonus-wrapper {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 49px;

  @include screen(lg) {
    align-items: center;
  }

  @include screen(md) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 13px;

    @include screen(lg) {
      align-items: flex-start;
      min-width: 200px;
    }

    @include screen(md) {
      margin-right: 0;
    }

    & img {
      width: 229px;
    }
  }

  .photos {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 25px;

    @include screen(md) {
      margin-top: 7px;
    }

    &::after {
      content: '';
      position: absolute;
      top: -96px;
      right: -99px;
      z-index: 1;
      width: 236px;
      height: 196px;
      background-image: url('~@/assets/img/welfare/3@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @include screen(md) {
        top: -204px;
        right: calc(-50vw + 173px);
        width: 102px;
        height: 147px;
        background-image: url('~@/assets/img/welfare/rice_mb@2x.png');
      }
    }

    & img:nth-child(1) {
      z-index: 2;
      width: 335px;
      margin-right: 12px;
      @include screen(lg) {
        margin-right: 0;
      }
    }

    & img:nth-child(2) {
      z-index: 2;
      width: 326px;

      @include screen(lg) {
        display: none;
      }
    }
  }
}

.welfare-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: hidden;

  @include screen(md) {
    flex-direction: column;
    align-items: center;
  }

  .pizza {
    position: relative;
    max-width: 325px;
    margin-top: 33px;
    margin-right: 19px;

    @include screen(md) {
      order: 1;
      margin: 17px 0 0;
    }

    & img {
      position: relative;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: -45px;
      left: -86px;
      z-index: 1;
      width: 133px;
      height: 147px;
      background-image: url('~@/assets/img/welfare/rice@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @include screen(md) {
        content: none;
      }
    }
  }

  .contents {
    & img {
      width: 226px;
      margin-right: auto;
      margin-bottom: 6px;

      @include screen(md) {
        margin: 0 0 6px 8px;
      }
    }
  }

  .list-grp {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @include screen(xl) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    & > ul:first-child {
      margin-right: 30px;

      @include screen(xl) {
        margin-right: 0;
      }
    }
  }
}

// animation
.container.animate {
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

    &::after {
      transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transform-origin: left bottom;
      animation: animate-scale-bounce 1400ms linear both;
      animation-play-state: paused;
      animation-delay: 800ms;
    }

    &.activated {
      animation-play-state: running;

      &::after {
        animation-play-state: running;
      }
    }
  }

  .grow-img,
  .salary-img,
  .welfare-img {
    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: center;
    animation: animate-scale-bounce 1400ms linear both;
    animation-play-state: paused;

    &.activated {
      animation-play-state: running;
    }
  }
}

.training-wrapper .common-list,
.bonus-wrapper .common-list,
.list-grp,
.sequence {
  opacity: 0;
  transform: translateX(100px);
  animation: animate-slide-up 800ms cubic-bezier(.34, 1.56, .64, 1) 0s normal forwards;
  animation-play-state: paused;
  animation-delay: 400ms;

  @include screen(md) {
    animation-delay: 300ms;
  }

  &.activated {
    animation-play-state: running;
  }
}

.photos {
  & img:nth-child(1) {
    opacity: 0;
    transition: opacity 800ms ease 400ms;
  }

  & img:nth-child(2) {
    opacity: 0;
    transition: opacity 800ms ease 600ms;
  }

  &.activated img {
    opacity: 1;
  }
}

.pizza {
  opacity: 0;
  transition: opacity 800ms ease 400ms;

  @include screen(md) {
    transition: opacity 800ms ease;
  }

  &.activated {
    opacity: 1;
  }
}

.title-anim-tri-dummy.activated + div {
  .title {
    animation-play-state: running;
  }
}
</style>
