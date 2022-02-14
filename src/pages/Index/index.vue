<template>
  <div class="Index">
    <Hero></Hero>
    <Intro></Intro>
    <Welfare></Welfare>
    <a
      v-scroll-to="{
        el: '#job-list-section',
        offset: -20,
      }"
      href="#"
      class="join-now-btn"
      :class="{'is-button-fixed': isButtonFixed}"
    >
      <img
        src="@/assets/img/joinbtn@2x.png"
        alt="立即應徵"
      >
    </a>
  </div>
</template>

<script>
import Hero from '@/components/Blocks/Hero'
import Intro from '@/components/Blocks/Intro'
import Welfare from '@/components/Blocks/Welfare'
export default {
  name: 'Index',
  components: {
    Hero,
    Intro,
    Welfare
  },
  computed: {
    isButtonFixed () {
      return !this.$store.state.isFooterVisible
    }
  }
}
</script>

<style lang="scss">

.Index {
  position: relative;
  overflow: hidden;

  .join-now-btn {
    z-index: 90;
    display: none;
    width: 100%;
    height: auto;

    @include screen(md) {
      display: block;
    }

    &.is-button-fixed {
      position: fixed;
      bottom: 0;
      left: 0;
      min-width: 320px;
      overflow: auto;
    }
  }
}
</style>
