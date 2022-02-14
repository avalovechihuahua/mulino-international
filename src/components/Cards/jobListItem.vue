<template>
  <li
    class="job-list-item"
    :class="{hot: job.hot}"
    :style="`background-image:url(${job.bgImgSrc});`"
  >
    <div class="job-title">
      {{ job.title }}
    </div>
    <img
      draggable="false"
      class="salary"
      :src="job.salaryImgSrc"
      alt="薪水"
    >
    <ul class="qualification">
      <li
        v-for="(q, index) in job.qualifications"
        :key="index"
        class="qualification-item"
      >
        {{ q }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
      default: () => {}
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.job-list-item {
  position: relative;
  z-index: 3;
  width: 267px;
  height: 266px;
  margin: 0 6px;
  margin-bottom: 41px;
  padding: 33px 38px 0;
  list-style-type: none;
  background-image: url('~@/assets/img/intro/s1-bg@2x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @include screen(md) {
    flex-shrink: 0;
    margin-bottom: 0;
    cursor: grab;
  }

  &.hot::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -1px;
    width: 78px;
    height: 49px;
    background-image: url('~@/assets/img/intro/hot@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

.job-title {
  @extend %source-han-seriftc-heavy;
  margin-bottom: 6px;
  font-size: 30px;
  color: #420000;
  text-align: center;
}

.salary {
  width: auto;
  height: 28px;
  margin: 0 auto;
  margin-bottom: 5px;
}

.qualification {
  @extend %source-han-sans;
  position: relative;
  margin-top: 8px;
  padding-left: 20px;
  font-size: 18px;
  font-style: normal;
  line-height: 1.72;
  color: #420000;
  text-align: justify;
}

.qualification-item {
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 18px;
    color: color(brown);
    transform: translateX(-100%);
  }
}
</style>
