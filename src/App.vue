<template>
  <div
    id="app"
    :class="{'is-fixed': isScrollLock}"
  >
    <Loading></Loading>
    <Header></Header>
    <router-view id="view"></router-view>
    <MktFooter
      :company="company"
      :ext-number="extNumber"
      :contact-email="contactEmail"
    ></MktFooter>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import MktFooter from '@/components/MktFooter'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
    MktFooter,
    Loading
  },
  metaInfo () {
    return {
      title: '慕里諾國際餐飲',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: '位於富士山腳下的「靜岡勝政日式豬排」，為日本靜岡縣屹立近20年的指標性排隊豬排名店，傳承兩代在地經營至今。靜岡勝政日式豬排從食材、製作、食器選擇、服務、環境營造，無一不細心嚴選打造，以期完整體現靜岡勝政日式豬排不斷追求「究極の日式豬排」的精神。'
      }]
    }
  },
  data () {
    return {
      company: '慕里諾國際餐飲',
      extNumber: '(02)2571-8222',
      contactEmail: 'mulino@gmail.com'
    }
  },
  computed: {
    isScrollLock () {
      return this.$store.state.body.isFixed
    }
  }
}
</script>

<style lang="scss">
@use '@/assets/style/main.scss';

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#view {
  flex: 1;
}

.is-fixed {
  height: 100vh;
  overflow-y: hidden;
}
</style>
