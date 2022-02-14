<template>
  <div>
    <div
      class="mkt-footer"
    >
      <div
        ref="trigger-dummy"
        class="trigger-dummy"
      ></div>
      <p>
        上述內容由 {{ company }} 提供<br>
        以上所提及之各公司與產品均分屬各相關公司與個別擁有者之商標<br>
      </p>
      <p>
        本網站內容享有著作權，禁止侵害，違者必究。© Copyright {{ new Date().getFullYear() }} {{ company }}
      </p>
    </div>
  </div>
</template>

<script>
import {} from '@vue/composition-api'

export default {
  name: 'MktFooter',
  props: {
    company: {
      type: String,
      required: true
    },
    extNumber: {
      type: String,
      required: true
    },
    contactEmail: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      triggerDummy: null
    }
  },
  mounted () {
    this.triggerDummy = this.$refs['trigger-dummy']
    window.addEventListener('scroll', () => {
      const result = this.isElementVisible(this.triggerDummy)
      this.$store.commit('setFooterVisibilityTo', result)
    })
  },
  methods: {
    isElementVisible (el) {
      const rect = el.getBoundingClientRect()
      const vWidth = window.innerWidth || document.documentElement.clientWidth
      const vHeight = window.innerHeight || document.documentElement.clientHeight
      const efp = function (x, y) { return document.elementFromPoint(x, y) }

      if (rect.right < 0 || rect.bottom < 0 ||
            rect.left > vWidth || rect.top > vHeight) { return false }

      return (
        el.contains(efp(rect.left, rect.top)) ||
        el.contains(efp(rect.right, rect.top)) ||
        el.contains(efp(rect.right, rect.bottom)) ||
        el.contains(efp(rect.left, rect.bottom))
      )
    }
  }
}
</script>

<style lang="scss">
.trigger-dummy {
  position: absolute;
  top: -45px;
  left: 0;
  width: 10px;
  height: 10px;
}

.join-now-btn {
  display: none;
  @include screen(md) {
    display: block;
    width: 100%;
    height: auto;
  }
}

.mkt-footer {
  position: relative;
  margin-top: auto;
  padding: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: color(white);
  text-align: center;
  background-color: color(green);

  .contact {
    display: inline-block;
    vertical-align: middle;
  }
}

// xxl | xl | lg | md | sm
// @include screen (xl) {}
</style>
