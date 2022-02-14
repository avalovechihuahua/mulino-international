<template>
  <div class="outer-container">
    <About></About>
    <JoinUs></JoinUs>
    <JobList></JobList>
    <div class="empty"></div>
  </div>
</template>

<script>
import About from './about'
import JoinUs from './joinUs'
import JobList from './jobList'
export default {
  components: {
    About,
    JoinUs,
    JobList
  }
}
</script>

<style lang="scss" scoped>
.outer-container {
  padding: 26px 0 26px;
  background-image: url('~@/assets/img/intro/path@3x.png') ,url('~@/assets/img/intro/bg-5.png');
  background-repeat: no-repeat;
  background-position: center 185px, center 0%;
  background-size: auto 222px, 1922px auto;

  @media screen and (min-width: 1921px) {
    background-size: 100% 222px, 100% auto;
  }

  @include screen(md) {
    padding: 20% 0 0;
    background-image: url('~@/assets/img/intro/rice_mb@2x.png');
    background-position: center 3%;
    background-size: 100% auto;
  }
}

.empty {
  width: 100%;
  height: 253px;

  @include screen(xl) {
    height: 0;
  }
}
</style>
