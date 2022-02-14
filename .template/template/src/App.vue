<template>
  <div id="app">
    <MktHeader :company="company"></MktHeader>
    <router-view id="view"></router-view>
    <MktFooter
      :company="company"
      :ext-number="extNumber"
      :contact-email="contactEmail"
    ></MktFooter>
  </div>
</template>

<script>
import MktHeader from '@/components/MktHeader'
import MktFooter from '@/components/MktFooter'

export default {
  name: 'App',
  components: {
    MktHeader,
    MktFooter
  },
  metaInfo () {
    return {
      title: 'Title...',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Description...'
      }]
    }
  },
  data () {
    return {
      company: '<%= options.companyName || 'xxx股份有限公司' %>',
      extNumber: '<%= options.extNumber || 'xxxx' %>',
      contactEmail: '<%= options.contactEmail || '' %>'
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
</style>
