<template>
  <header
    id="header"
    class="header"
  >
    <div class="container">
      <div class="wrapper">
        <a
          href="#"
          class="logo"
        >
          <img
            src="@/assets/img/header/logo@2x.png"
            alt="幕里諾國際餐飲集團"
          >
        </a>
        <div
          class="hamburger-btn"
          :class="{active: isMenuShow}"
          @click="toggleHamburgerBtn"
        >
          <div class="line"></div>
        </div>
        <nav
          class="navigation"
          :class="{'navigation--active': isMenuShow}"
        >
          <ul class="menu">
            <li class="menu-item">
              <a
                v-scroll-to="jobListScrollToOptions"
                href="#"
                @click="toggleHamburgerBtn"
              >職缺簡介</a>
            </li>
            <li class="menu-item">
              <a
                v-scroll-to="{
                  el: '#about-section',
                  offset: -70,
                }"
                href="#"
                @click="toggleHamburgerBtn"
              >輝煌成績</a>
            </li>
            <li class="menu-item">
              <a
                v-scroll-to="{
                  el: '#welfare-section',
                  offset: -100,
                }"
                href="#"
                @click="toggleHamburgerBtn"
              >福利制度</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isMenuShow: false,
      vw: window.innerWidth,
      mbWidth: 768
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
    jobListScrollToOptions () {
      if (this.isMobile) {
        return {
          el: '#job-list-section',
          offset: -20
        }
      } else {
        return {
          el: '#job-list-section',
          offset: -230
        }
      }
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
    })
  },
  methods: {
    toggleHamburgerBtn () {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      if (width <= 768) {
        this.isMenuShow = !this.isMenuShow
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #f7f5ee;
}

.container {
  width: 100%;
  background-image: url('~@/assets/img/header/menu@3x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 64px;

  @media screen and (min-width: 1921px) {
    background-size: 100% auto;
  }

  @include screen(md) {
    padding: 0 $container-padding-mb;
    background: none;
    background-color: color(green);
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  height: 64px;
  margin: 0 auto;
  padding: 0 $container-padding-pad;

  @include screen(md) {
    height: 50px;
    padding: 0;
  }
}

.logo {
  display: block;
  width: 331px;
  margin-top: 12px;

  @include screen(md) {
    width: 230px;
  }
}

.navigation {

  @include screen(md) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    visibility: hidden;
    background-color: color(green);
    opacity: 0;
    transition: opacity .15s linear;
  }

  &--active {

    @include screen(md) {
      visibility: visible;
      opacity: 1;
    }
  }
}

.menu {
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

  @include screen(md) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-item {
    @include clickable;
    @extend %source-han-sans;
    position: relative;
    display: inline-block;
    padding: 0 28px;
    font-size: 18px;
    font-weight: bold;
    color: color(white);
    letter-spacing: normal;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 129px;
      height: 50px;
      pointer-events: none;
      background-image: url('~@/assets/img/header/hover@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0;
      transition: opacity 100ms linear;
      transform: translate(-50%, -50%) scale(1);

      @include screen(md) {
        transform: translate(-50%, -50%) scale(1.2);
      }
    }

    &:hover::before {
      @media (hover: hover) {
        opacity: 1;
      }
    }

    @include screen(md) {
      margin-bottom: 25px;
      font-size: 28px;
    }
  }
}

// 手機版本的漢堡按鈕
.hamburger-btn {
  position: relative;
  z-index: 101;
  display: none;
  width: 30px;
  height: 25px;

  &.active::after {
    top: 50%;
    transform: rotateZ(140deg) translateX(-3px);
    transform-origin: 50%;
  }

  &.active::before {
    bottom: 50%;
    transform: rotateZ(-140deg) translateX(-1px);
    transform-origin: 50%;
  }

  &.active {
    .line {
      height: 0;
      opacity: 0;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: color(white);
    transition: opacity .2s linear;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: color(white);
    transition: opacity .2s linear;
  }

  @include screen(md) {
    @include clickable;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: color(white);
  }
}
</style>
